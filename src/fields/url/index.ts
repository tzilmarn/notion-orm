import { FieldType, NotionProp } from '../types'

export interface UrlField<T extends NotionProp['type'] = 'url'>
	extends FieldType<T> {}

export const urlParser: UrlField['parser'] = (_, value) => {
	return value
}
