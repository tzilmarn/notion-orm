import type { GetResourceType, Schema } from '..'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import _ from 'lodash'
import { fieldParsers } from '.'

export const parseNotionPage = <S extends Schema, R extends keyof S & string>(
	schema: S,
	resourceName: R,
	page: PageObjectResponse
): GetResourceType<S, R> => {
	const properties = _.chain(page.properties)
		.entries()
		.map(([notionFieldName, notionValue]) => {
			return [
				notionFieldName,
				fieldParsers[notionValue.type].parse(notionValue),
			]
		})
		.fromPairs()
		.omitBy(_.isUndefined)
		.value() as GetResourceType<S, R>['properties']

	return { ...page, properties: { ...page.properties, ...properties } }
}
