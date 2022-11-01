import { FieldBase, FieldParser, NotionProp } from '..'

export type UrlField<K extends NotionProp['type'] = 'url'> = FieldBase<K> & {
	additional: {}
	definitionSchema: {
		type: K
	}
}

export const urlFieldParser: FieldParser<UrlField> = {
	notionKey: 'url',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
