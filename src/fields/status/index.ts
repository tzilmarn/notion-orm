import { FieldBase, FieldParser, NotionProp } from '..'

export type StatusField<K extends NotionProp['type'] = 'status'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const statusFieldParser: FieldParser<StatusField> = {
	notionKey: 'status',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
