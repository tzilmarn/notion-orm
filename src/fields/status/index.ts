import { FieldType, NotionProp } from '../types'

export interface StatusField<T extends NotionProp['type'] = 'status'>
	extends FieldType<T> {}

export const statusParser: StatusField['parser'] = (_, value) => {
	return value
}
