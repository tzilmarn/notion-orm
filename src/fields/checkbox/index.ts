import { FieldBase, FieldParser, NotionProp } from '..'

export type CheckboxField<K extends NotionProp['type'] = 'checkbox'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const checkboxFieldParser: FieldParser<CheckboxField> = {
	notionKey: 'checkbox',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
