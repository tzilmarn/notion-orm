import { FieldBase, FieldParser, NotionProp } from '..'

export type TitleField<K extends NotionProp['type'] = 'title'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const titleFieldParser: FieldParser<TitleField> = {
	notionKey: 'title',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
			plainText: value.title.map(({ plain_text }) => plain_text).join(' '),
		}
	},
}
