import { FieldBase, FieldParser, NotionProp } from '..'

export type NumberField<K extends NotionProp['type'] = 'number'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const numberFieldParser: FieldParser<NumberField> = {
	notionKey: 'number',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
