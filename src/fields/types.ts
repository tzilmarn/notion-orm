import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
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
