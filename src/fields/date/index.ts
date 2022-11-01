import { FieldBase, FieldParser, NotionProp } from '..'

export type DateField<K extends NotionProp['type'] = 'date'> = FieldBase<K> & {
	additional: {}
	definitionSchema: {
		type: K
	}
}

export const dateFieldParser: FieldParser<DateField> = {
	notionKey: 'date',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
