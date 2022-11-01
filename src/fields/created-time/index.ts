import { FieldBase, FieldParser, NotionProp } from '..'

export type CreatedTimeField<K extends NotionProp['type'] = 'created_time'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const createdTimeFieldParser: FieldParser<CreatedTimeField> = {
	notionKey: 'created_time',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
