import { Client, isFullPage } from '@notionhq/client'
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints'
import type { GetResourceType, Schema } from '..'
import { parseNotionPage } from '../fields/parser'
import { Filters, Sorts } from '../fields/types'

export type GetOneByOptions<S extends Schema, R extends keyof S> = Omit<
	QueryDatabaseParameters,
	'database_id' | 'page_size' | 'start_cursor' | 'filter' | 'sorts'
> & {
	filter?: Filters<S, R>
	sorts?: Sorts<S, R>
}

export const createGetOneBy = <S extends Schema, R extends keyof S>(
	client: Client,
	schema: S,
	resourceName: R
) => {
	return async (
		options?: GetOneByOptions<S, R>
	): Promise<GetResourceType<S, R> | undefined> => {
		const databaseId = schema[resourceName]?.databaseId
		if (!databaseId)
			throw `Database ID is required for resource ${String(resourceName)}`

		// TODO find out cause of type error
		const response = await client.databases.query({
			database_id: databaseId,
			...(options as any),
			page_size: 1,
		})
		const page = response.results[0]
		if (!isFullPage(page)) return undefined
		const parsedPage = parseNotionPage(schema, resourceName, page)

		return parsedPage
	}
}
