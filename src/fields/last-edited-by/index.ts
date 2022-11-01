import { FieldBase, FieldParser, NotionProp } from '..'

export type LastEditedByField<K extends NotionProp['type'] = 'last_edited_by'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const lastEditedByFieldParser: FieldParser<LastEditedByField> = {
	notionKey: 'last_edited_by',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
