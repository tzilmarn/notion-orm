import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
export type NotionProp = PageObjectResponse['properties'][string]

export type FieldParser<F extends Field> = {
	notionKey: F['notionKey']
	parse(
		value: F['notionType'] | undefined
	): Partial<F['notionType'] & F['additional']> | undefined
}

export type FieldBase<K extends NotionProp['type']> = {
	notionKey: K
	notionType: Extract<NotionProp, { type: K }>
}

import { CheckboxField, checkboxFieldParser } from './checkbox'
import { CreatedByField, createdByFieldParser } from './created-by'
import { CreatedTimeField, createdTimeFieldParser } from './created-time'
import { DateField, dateFieldParser } from './date'
import { EmailField, emailFieldParser } from './email'
import { FilesField, filesFieldParser } from './files'
import { FormulaField, formulaFieldParser } from './formula'
import { LastEditedByField, lastEditedByFieldParser } from './last-edited-by'
import {
	LastEditedTimeField,
	lastEditedTimeFieldParser,
} from './last-edited-time'
import { MultiSelectField, multiSelectFieldParser } from './multi-select'
import { NumberField, numberFieldParser } from './number'
import { PeopleField, peopleFieldParser } from './people'
import { PhoneNumberField, phoneNumberFieldParser } from './phone-number'
import { RelationField, relationFieldParser } from './relation'
import { RichTextField, richTextFieldParser } from './rich-text'
import { RollupField, rollupFieldParser } from './rollup'
import { SelectField, selectFieldParser } from './select'
import { StatusField, statusFieldParser } from './status'
import { TitleField, titleFieldParser } from './title'
import { UrlField, urlFieldParser } from './url'

export type Field =
	| CheckboxField
	| CreatedByField
	| CreatedTimeField
	| DateField
	| EmailField
	| FilesField
	| FormulaField
	| LastEditedByField
	| LastEditedTimeField
	| MultiSelectField
	| NumberField
	| PeopleField
	| PhoneNumberField
	| RelationField
	| RichTextField
	| RollupField
	| SelectField
	| StatusField
	| TitleField
	| UrlField

export const fieldParsers: Record<NotionProp['type'], FieldParser<any>> = {
	checkbox: checkboxFieldParser,
	created_by: createdByFieldParser,
	created_time: createdTimeFieldParser,
	date: dateFieldParser,
	email: emailFieldParser,
	files: filesFieldParser,
	formula: formulaFieldParser,
	last_edited_by: lastEditedByFieldParser,
	last_edited_time: lastEditedTimeFieldParser,
	multi_select: multiSelectFieldParser,
	number: numberFieldParser,
	people: peopleFieldParser,
	phone_number: phoneNumberFieldParser,
	relation: relationFieldParser,
	rich_text: richTextFieldParser,
	rollup: rollupFieldParser,
	select: selectFieldParser,
	status: statusFieldParser,
	title: titleFieldParser,
	url: urlFieldParser,
} as const
