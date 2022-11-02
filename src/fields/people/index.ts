import { FieldType, NotionProp } from '../types'

export interface PeopleField<T extends NotionProp['type'] = 'people'>
	extends FieldType<T> {}

export const peopleParser: PeopleField['parser'] = (_, value) => {
	return value
}
