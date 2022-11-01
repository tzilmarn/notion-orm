import { FieldBase, FieldParser, NotionProp } from '..'

export type MultiSelectField<K extends NotionProp['type'] = 'multi_select'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const multiSelectFieldParser: FieldParser<MultiSelectField> = {
	notionKey: 'multi_select',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
