import { FieldParser, NotionProp } from '..'

export type RichTextField<T = 'rich_text'> = {
	Input: Extract<NotionProp, { type: 'rich_text' | 'title' }>
	Output: { type: T; value: { richText: string } }
	Schema: T | { type: T }
}

export const richTextFieldParser: FieldParser<RichTextField> = {
	fieldType: 'rich_text',
	inputTypes: ['title', 'rich_text'],
	parse(_, value) {
		if (value.type === 'title')
			return {
				type: 'rich_text',
				value: {
					richText: value.title.map(({ plain_text }) => plain_text).join(' '),
				},
			}
		else if (value.type === 'rich_text')
			return {
				type: 'rich_text',
				value: {
					richText: value.rich_text
						.map(({ plain_text }) => plain_text)
						.join(' '),
				},
			}
	},
}
