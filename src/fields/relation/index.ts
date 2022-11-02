import { FieldType, NotionProp } from '../types'

export interface RelationField<T extends NotionProp['type'] = 'relation'>
	extends FieldType<T> {}

export const relationParser: RelationField['parser'] = (_, value) => {
	return value
}
