import { FieldBase, FieldParser, NotionProp } from '..'

export type CreatedByField<K extends NotionProp['type'] = 'created_by'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const createdByFieldParser: FieldParser<CreatedByField> = {
	notionKey: 'created_by',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
