import { FieldType, NotionProp } from '../types'

export interface SelectField<T extends NotionProp['type'] = 'select'>
	extends FieldType<T> {}

export const selectParser: SelectField['parser'] = (_, value) => {
	return value
}
