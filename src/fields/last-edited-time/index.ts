import { FieldBase, FieldParser, NotionProp } from '..'

export type LastEditedTimeField<
	K extends NotionProp['type'] = 'last_edited_time'
> = FieldBase<K> & {
	additional: {}
	definitionSchema: {
		type: K
	}
}

export const lastEditedTimeFieldParser: FieldParser<LastEditedTimeField> = {
	notionKey: 'last_edited_time',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
