import { FieldType, NotionProp } from '../types'

export interface RichTextField<T extends NotionProp['type'] = 'rich_text'>
	extends FieldType<T, {}, { plainText: string }> {}

export const richTextParser: RichTextField['parser'] = (_, value) => {
	return {
		...value,
		plainText: value.rich_text.map(({ plain_text }) => plain_text).join(' '),
	}
}
