import { FieldBase, FieldParser, NotionProp } from '..'

export type RichTextField<K extends NotionProp['type'] = 'rich_text'> =
	FieldBase<K> & {
		additional: {
			plainText: string
		}
		definitionSchema: {
			type: K
		}
	}

export const richTextFieldParser: FieldParser<RichTextField> = {
	notionKey: 'rich_text',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
			plainText: value.rich_text.map(({ plain_text }) => plain_text).join(' '),
		}
	},
}
