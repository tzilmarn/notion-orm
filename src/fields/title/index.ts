import { FieldType, NotionProp } from '../types'

export interface TitleField<T extends NotionProp['type'] = 'title'>
	extends FieldType<T, {}, { plainText: string }> {}

export const titleParser: TitleField['parser'] = (_, value) => {
	return {
		...value,
		plainText: value.title.map(({ plain_text }) => plain_text).join(' '),
	}
}
