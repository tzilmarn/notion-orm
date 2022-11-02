import { Client, isFullPage } from '@notionhq/client'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import type { GetResourceType, Schema } from '..'
import { parseNotionPage } from '../fields/parser'

export type GetManyOptions = Omit<QueryDatabaseParameters, 'database_id'>

export const createGetMany = <S extends Schema, R extends keyof S>(
	client: Client,
	schema: S,
	resourceName: R
) => {
	return async (options: GetManyOptions): Promise<GetResourceType<S, R>[]> => {
		const databaseId = schema[resourceName]?.databaseId
		if (!databaseId)
			throw `Database ID is required for resource ${String(resourceName)}`

		const response = await client.databases.query({
			database_id: databaseId,
			...options,
		})
		const pages = response.results.filter(isFullPage)
		const parsedPages = pages.map((page) =>
			parseNotionPage(schema, resourceName, page)
		)

		return parsedPages
	}
}
