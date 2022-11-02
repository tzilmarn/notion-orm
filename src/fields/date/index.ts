import { FieldType, NotionProp } from '../types'

export interface DateField<T extends NotionProp['type'] = 'date'>
	extends FieldType<T> {}

export const dateParser: DateField['parser'] = (_, value) => {
	return value
}
