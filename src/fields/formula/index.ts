import { FieldBase, FieldParser, NotionProp } from '..'

export type FormulaField<K extends NotionProp['type'] = 'formula'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
			formulaType?: 'string' | 'number' | 'boolean' | 'date'
		}
	}

export const formulaFieldParser: FieldParser<FormulaField> = {
	notionKey: 'formula',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
