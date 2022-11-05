import { Client as NotionClient } from '@notionhq/client'
import { PageObjectResponse } from './api-types'
import { ClientOptions } from '@notionhq/client/build/src/Client'
import mapValues from 'lodash/mapValues'
import { Field } from './fields'
import { createGetOne } from './methods/get-one'
import { createGetOneBy } from './methods/get-one-by'
import { createGetMany } from './methods/get-many'

export type Schema = {
	[resourceName: string]: {
		databaseId: string
		fields: Record<string, Field['schema']>
	}
}

export type Client<S extends Schema> = {
	[R in keyof S & string]: {
		getOne: ReturnType<typeof createGetOne<S, R>>
		getOneBy: ReturnType<typeof createGetOneBy<S, R>>
		getMany: ReturnType<typeof createGetMany<S, R>>
	}
}

export type GetResourceType<S extends Schema, R extends keyof S> = Omit<
	PageObjectResponse,
	'properties'
> & {
	properties: {
		[fieldName in keyof S[R]['fields']]: Extract<
			Field,
			{ notionType: S[R]['fields'][fieldName]['type'] }
		>['returnType']
	}
}

export const createClient = <S extends Schema>(
	schema: S,
	options?: ClientOptions
): Client<S> => {
	const notionClient = new NotionClient({
		...options,
	})

	// TODO investigate why the type here is wrong
	const client = mapValues(schema, (_, resourceName: keyof S) => ({
		getOne: createGetOne(notionClient, schema, resourceName),
		getOneBy: createGetOneBy(notionClient, schema, resourceName),
		getMany: createGetMany(notionClient, schema, resourceName),
	}))
	return client
}
