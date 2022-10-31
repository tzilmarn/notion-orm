import { Field, fieldParsers, NotionProp } from '.'
import type { BaseResourceProps, GetResourceType, Schema } from '..'
import isString from 'lodash/isString'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import _ from 'lodash'
import { parseImage } from '../util/parse-image'

export const parseField = <
	S extends Schema,
	R extends keyof S & string,
	F extends keyof S[R]['fields'] & string
>(
	schema: S,
	resourceName: R,
	fieldName: F,
	prop: NotionProp
): Extract<Field, S[R]['fields'][F]>['Output'] => {
	if (!prop) return undefined

	const fieldSchema = schema[resourceName].fields[fieldName]
	if (!fieldSchema) return undefined
	const fieldSchemaType = isString(fieldSchema) ? fieldSchema : fieldSchema.type

	const parser = fieldParsers.find(
		(parser) => fieldSchemaType === parser.fieldType
	)

	// TODO: Figure out the type error
	if (!parser) throw `No parser for field "${fieldSchema}"`
	if (!parser.inputTypes.includes(prop.type as unknown as never))
		throw `Parser for types "${parser.inputTypes.join(
			','
		)}" can not handle type "${prop.type}"`
	return (parser as any).parse(fieldSchema, prop)?.value
}

export const parseNotionPage = <S extends Schema, R extends keyof S & string>(
	schema: S,
	resourceName: R,
	page: PageObjectResponse
): GetResourceType<S, R> => {
	const result: BaseResourceProps = {
		_id: page.id,
		_parent: page.parent as any,
		_object: page.object,
		_cover: parseImage(page.cover),
		_icon: page.icon,
		_archived: page.archived,
		_createdBy: page.created_by,
		_createdTime: page.created_time,
		_lastEditedBy: page.created_by,
		_lastEditedTime: page.created_time,
		_url: page.url,
	}

	const props = _.chain(page.properties)
		.entries()
		.map(([notionFieldName, notionValue]) => {
			return [
				notionFieldName,
				parseField(schema, resourceName, notionFieldName, notionValue),
			]
		})
		.fromPairs()
		.omitBy(_.isUndefined)
		.value() as Exclude<GetResourceType<S, R>, BaseResourceProps>

	return { ...result, ...props }
}
