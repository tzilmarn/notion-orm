import { FieldBase, FieldParser, NotionProp } from '..'

export type RelationField<K extends NotionProp['type'] = 'relation'> = FieldBase<K> & {
	additional: {}
	definitionSchema: {
		type: K
	}
}

export const relationFieldParser: FieldParser<RelationField> = {
	notionKey: 'relation',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}

