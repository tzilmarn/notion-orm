import { Client as NotionClient } from '@notionhq/client'
import {
	PageObjectResponse,
	PartialUserObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { ClientOptions } from '@notionhq/client/build/src/Client'
import mapValues from 'lodash/mapValues'
import { Field } from './fields'
import { createGetAll } from './methods/get-all'
import { ParsedImage } from './util/parse-image'

export type Schema = {
	[resourceName: string]: {
		databaseId: string
		fields: {
			[field: Exclude<string, 'id' | 'cover' | 'icon'>]: Field['Schema']
		}
	}
}

export type Client<S extends Schema> = {
	[R in keyof S & string]: {
		getAll: ReturnType<typeof createGetAll>
	}
}

export type BaseResourceProps = {
	_id: string
	_parent: {
		type: 'database_id'
		database_id: string
	}
	_object: 'page'
	_cover: ParsedImage | undefined
	_icon: PageObjectResponse['icon']
	_archived: boolean
	_createdBy: PartialUserObjectResponse
	_createdTime: string
	_lastEditedBy: PartialUserObjectResponse
	_lastEditedTime: string
	_url: string
}

export type GetResourceType<S extends Schema, R extends keyof S> = {
	[FS in keyof S[R]['fields']]: Partial<
		Extract<Field, { Schema: FS }>['Output']['value']
	> &
		BaseResourceProps
}

export const createClient = <S extends Schema>(
	schema: S,
	options?: ClientOptions
): Client<S> => {
	const notionClient = new NotionClient({
		...options,
	})

	const client = mapValues(schema, (_, resourceName) => ({
		getAll: createGetAll(notionClient, schema, resourceName),
	}))
	return client as any
}
