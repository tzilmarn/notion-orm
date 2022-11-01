import { FieldBase, FieldParser, NotionProp } from '..'

export type EmailField<K extends NotionProp['type'] = 'email'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const emailFieldParser: FieldParser<EmailField> = {
	notionKey: 'email',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
