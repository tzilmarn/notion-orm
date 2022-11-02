import { FieldType, NotionProp } from '../types'

export interface CreatedByField<K extends NotionProp['type'] = 'created_by'>
	extends FieldType<K> {}

export const createdByParser: CreatedByField['parser'] = (_, value) => {
	return value
}
