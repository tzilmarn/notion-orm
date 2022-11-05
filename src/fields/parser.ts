import type { GetResourceType, Schema } from '..'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import _ from 'lodash'
import { fieldParsers } from '.'

export const parseNotionPage = <S extends Schema, R extends keyof S>(
	schema: S,
	resourceName: R,
	page: PageObjectResponse
): GetResourceType<S, R> => {
	const properties = _.chain(page.properties)
		.entries()
		.map(([notionFieldName, notionValue]) => {
			const fieldSchema = schema[resourceName].fields[notionFieldName]
			const fieldParser = fieldParsers[fieldSchema.type]

			// For some reason the type here is never
			// Cast as any as a workaround
			let parsedValue = fieldParser(
				fieldSchema as any,
				notionValue as any
			) as any

			return [notionFieldName, parsedValue]
		})
		.fromPairs()
		.omitBy(_.isUndefined)
		.value() as GetResourceType<S, R>['properties']

	let coverUrl: string | undefined = undefined
	if (page.cover?.type === 'external') coverUrl = page.cover.external.url
	else if (page.cover?.type === 'file') coverUrl = page.cover.file.url

	return {
		...page,
		coverUrl,
		properties: { ...page.properties, ...properties },
	}
}
