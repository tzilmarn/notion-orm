import { FieldType, NotionProp } from '../types'

export interface FormulaField<T extends NotionProp['type'] = 'formula'>
	extends FieldType<T> {}

export const formulaParser: FormulaField['parser'] = (_, value) => {
	return value
}
