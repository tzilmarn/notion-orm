import { FieldType, NotionProp } from '../types'

export interface MultiSelectField<T extends NotionProp['type'] = 'multi_select'>
	extends FieldType<T> {}

export const multiSelectParser: MultiSelectField['parser'] = (_, value) => {
	return value
}
