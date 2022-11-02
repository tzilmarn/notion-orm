import { FieldType, NotionProp } from '../types'

export interface LastEditedTimeField<
	T extends NotionProp['type'] = 'last_edited_time'
> extends FieldType<T> {}

export const lastEditedTimeParser: LastEditedTimeField['parser'] = (
	_,
	value
) => {
	return value
}
