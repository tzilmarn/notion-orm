import {
	PageObjectResponse,
	PropertyFilter,
	TimestampCreatedTimeFilter,
	TimestampLastEditedTimeFilter,
} from '../api-types'
import { Schema } from '..'
export type NotionProp = PageObjectResponse['properties'][string]

export interface FieldType<
	K extends NotionProp['type'],
	AdditionalDefinition = {},
	AdditionalProps = {},
	NP = Extract<NotionProp, { type: K }>,
	ParserReturnType = NP & AdditionalProps,
	Schema = { type: K } & AdditionalDefinition
> {
	notionType: K
	notionProp: NP

	schema: Schema

	additionalProps: AdditionalProps

	parser(schema: Schema, value: NP): ParserReturnType

	returnType: ParserReturnType
}

type ResPropFilter<S extends Schema, R extends keyof S> = {
	[F in keyof S[R]['fields']]: Omit<
		Extract<PropertyFilter, { type?: S[R]['fields'][F]['type'] }>,
		'property'
	> & { property: F }
}[keyof S[R]['fields']]

export type Filters<S extends Schema, R extends keyof S> =
	| {
			or: Array<
				| ResPropFilter<S, R>
				| TimestampCreatedTimeFilter
				| TimestampLastEditedTimeFilter
				| { or: Array<ResPropFilter<S, R>> }
				| { and: Array<ResPropFilter<S, R>> }
			>
	  }
	| {
			and: Array<
				| ResPropFilter<S, R>
				| TimestampCreatedTimeFilter
				| TimestampLastEditedTimeFilter
				| { or: Array<ResPropFilter<S, R>> }
				| { and: Array<ResPropFilter<S, R>> }
			>
	  }
	| ResPropFilter<S, R>
	| TimestampCreatedTimeFilter
	| TimestampLastEditedTimeFilter

export type Sorts<S extends Schema, R extends keyof S> = Array<
	| {
			property: keyof S[R]['fields']
			direction: 'ascending' | 'descending'
	  }
	| {
			timestamp: 'created_time' | 'last_edited_time'
			direction: 'ascending' | 'descending'
	  }
>
