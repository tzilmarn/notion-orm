import { FieldType, NotionProp } from '../types'

export interface NumberField<T extends NotionProp['type'] = 'number'>
	extends FieldType<T> {}

export const numberParser: NumberField['parser'] = (_, value) => {
	return value
}
