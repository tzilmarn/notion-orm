import { FieldBase, FieldParser, NotionProp } from '..'

export type RollupField<K extends NotionProp['type'] = 'rollup'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const rollupFieldParser: FieldParser<RollupField> = {
	notionKey: 'rollup',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
