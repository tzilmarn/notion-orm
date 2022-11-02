import { FieldType, NotionProp } from '../types'

export interface CreatedTimeField<T extends NotionProp['type'] = 'created_time'>
	extends FieldType<T> {}

export const createdTimeParser: CreatedTimeField['parser'] = (_, value) => {
	return value
}
