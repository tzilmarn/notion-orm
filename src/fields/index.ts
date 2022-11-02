import { NotionProp } from './types'

import { CheckboxField, checkboxParser } from './checkbox'
import { CreatedByField, createdByParser } from './created-by'
import { CreatedTimeField, createdTimeParser } from './created-time'
import { DateField, dateParser } from './date'
import { EmailField, emailParser } from './email'
import { FilesField, filesParser } from './files'
import { FormulaField, formulaParser } from './formula'
import { LastEditedByField, lastEditedByParser } from './last-edited-by'
import { LastEditedTimeField, lastEditedTimeParser } from './last-edited-time'
import { MultiSelectField, multiSelectParser } from './multi-select'
import { NumberField, numberParser } from './number'
import { PeopleField, peopleParser } from './people'
import { PhoneNumberField, phoneNumberParser } from './phone-number'
import { RelationField, relationParser } from './relation'
import { RichTextField, richTextParser } from './rich-text'
import { RollupField, rollupParser } from './rollup'
import { SelectField, selectParser } from './select'
import { StatusField, statusParser } from './status'
import { TitleField, titleParser } from './title'
import { UrlField, urlParser } from './url'

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

export const fieldParsers: {
	[K in NotionProp['type']]: Extract<Field, { notionType: K }>['parser']
} = {
	checkbox: checkboxParser,
	created_by: createdByParser,
	created_time: createdTimeParser,
	date: dateParser,
	email: emailParser,
	files: filesParser,
	formula: formulaParser,
	last_edited_by: lastEditedByParser,
	last_edited_time: lastEditedTimeParser,
	multi_select: multiSelectParser,
	number: numberParser,
	people: peopleParser,
	phone_number: phoneNumberParser,
	relation: relationParser,
	rich_text: richTextParser,
	rollup: rollupParser,
	select: selectParser,
	status: statusParser,
	title: titleParser,
	url: urlParser,
} as const
