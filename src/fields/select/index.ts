import { FieldBase, FieldParser, NotionProp } from '..'

export type SelectField<K extends NotionProp['type'] = 'select'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const selectFieldParser: FieldParser<SelectField> = {
	notionKey: 'select',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
