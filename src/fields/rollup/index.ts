import { FieldType, NotionProp } from '../types'

export interface RollupField<T extends NotionProp['type'] = 'rollup'>
	extends FieldType<T> {}

export const rollupParser: RollupField['parser'] = (_, value) => {
	return value
}
