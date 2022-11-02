import { FieldType, NotionProp } from '../types'

export interface LastEditedByField<
	T extends NotionProp['type'] = 'last_edited_by'
> extends FieldType<T> {}

export const lastEditedByParser: LastEditedByField['parser'] = (_, value) => {
	return value
}
