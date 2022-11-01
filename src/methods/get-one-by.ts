import { Client, isFullPage } from '@notionhq/client'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import type { GetResourceType, Schema } from '..'
import { parseNotionPage } from '../fields/parser'

export type GetOneByOptions = Omit<
	QueryDatabaseParameters,
	'database_id' | 'page_size' | 'start_cursor'
>

export const createGetOneBy = <S extends Schema, R extends keyof S>(
	client: Client,
	schema: S,
	resourceName: R
) => {
	return async (
		options: GetOneByOptions
	): Promise<GetResourceType<S, R> | undefined> => {
		const databaseId = schema[resourceName]?.databaseId
		if (!databaseId)
			throw `Database ID is required for resource ${String(resourceName)}`

		const response = await client.databases.query({
			database_id: databaseId,
			...options,
			page_size: 1,
		})
		const page = response.results[0]
		if (!isFullPage(page)) return undefined
		const parsedPage = parseNotionPage(schema, String(resourceName), page)

		return parsedPage
	}
}
