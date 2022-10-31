import { FieldParser, NotionProp } from '..'

export type TextField<T = 'text'> = {
	Input: Extract<NotionProp, { type: 'rich_text' | 'title' }>
	Output: { type: T; value: string }
	Schema: T | { type: T }
}

export const textFieldParser: FieldParser<TextField> = {
	fieldType: 'text',
	inputTypes: ['title', 'rich_text'],
	parse(_, value) {
		if (value.type === 'title')
			return {
				type: 'text',
				value: value.title.map(({ plain_text }) => plain_text).join(' '),
			}
		else if (value.type === 'rich_text')
			return {
				type: 'text',
				value: value.rich_text.map(({ plain_text }) => plain_text).join(' '),
			}
	},
}
