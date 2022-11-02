import { FieldType, NotionProp } from '../types'

export interface EmailField<T extends NotionProp['type'] = 'email'>
	extends FieldType<T> {}

export const emailParser: EmailField['parser'] = (_, value) => {
	return value
}
