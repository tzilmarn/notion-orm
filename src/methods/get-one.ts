import { Client, isFullPage } from '@notionhq/client'
import type { GetResourceType, Schema } from '..'
import { parseNotionPage } from '../fields/parser'

export const createGetOne = <S extends Schema, R extends keyof S>(
	client: Client,
	schema: S,
	resourceName: R
) => {
	return async (id: string): Promise<GetResourceType<S, R> | undefined> => {
		const databaseId = schema[resourceName]?.databaseId
		if (!databaseId)
			throw `Database ID is required for resource ${String(resourceName)}`

		const response = await client.pages.retrieve({
			page_id: id,
		})

		if (!isFullPage(response)) return undefined
		const parsedPage = parseNotionPage(schema, String(resourceName), response)

		return parsedPage
	}
}
