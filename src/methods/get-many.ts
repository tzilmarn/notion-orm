import { Client, isFullPage } from '@notionhq/client'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import type { GetResourceType, Schema } from '..'
import { parseNotionPage } from '../fields/parser'
import { Filters, Sorts } from '../fields/types'

export type GetManyOptions<S extends Schema, R extends keyof S> = Omit<
	QueryDatabaseParameters,
	'database_id' | 'filter' | 'sorts'
> & {
	filter?: Filters<S, R>
	sorts?: Sorts<S, R>
}

export const createGetMany = <S extends Schema, R extends keyof S>(
	client: Client,
	schema: S,
	resourceName: R
) => {
	return async (
		options: GetManyOptions<S, R>
	): Promise<GetResourceType<S, R>[]> => {
		const databaseId = schema[resourceName]?.databaseId
		if (!databaseId)
			throw `Database ID is required for resource ${String(resourceName)}`

		// TODO find out cause of type error
		const response = await client.databases.query({
			database_id: databaseId,
			...options as any,
		})
		const pages = response.results.filter(isFullPage)
		const parsedPages = pages.map((page) =>
			parseNotionPage(schema, resourceName, page)
		)

		return parsedPages
	}
}
