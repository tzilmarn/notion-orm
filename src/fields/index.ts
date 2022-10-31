import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
export type NotionProp = PageObjectResponse['properties'][string]

export type FieldParser<F extends Field> = {
	fieldType: F['Schema'] extends { type: infer T } ? T : F['Schema']
	inputTypes: readonly F['Input']['type'][]
	parse: (
		fieldSchema: F['Schema'],
		value: F['Input'] | undefined
	) => F['Output']
}

import { TextField, textFieldParser } from './text'
import { RichTextField, richTextFieldParser } from './rich-text'
import { SelectField, selectFieldParser } from './select'
import { ImageField, imageFieldParser } from './image'
import { DateField, dateFieldParser } from './date'
export type Field =
	| TextField
	| RichTextField
	| SelectField
	| ImageField
	| DateField
export const fieldParsers = [
	textFieldParser,
	richTextFieldParser,
	selectFieldParser,
	imageFieldParser,
	dateFieldParser,
] as const
