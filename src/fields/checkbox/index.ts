import { FieldType, NotionProp } from '../types'

export interface CheckboxField<T extends NotionProp['type'] = 'checkbox'>
	extends FieldType<T> {}

export const checkboxParser: CheckboxField['parser'] = (_, value) => {
	return value
}
