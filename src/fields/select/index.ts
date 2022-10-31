import { FieldParser, NotionProp } from '..'

export type SelectField<T = 'select'> =
	| {
			Input: Extract<NotionProp, { type: 'select' | 'status' }>
			Output: {
				type: T
				value: {
					id: string
					name: string
					color: Extract<NotionProp, { type: 'select' }>['select']['color']
				}
			}
			Schema: T | { type: T; multiple?: false }
	  }
	| {
			Input: Extract<NotionProp, { type: 'multi_select' }>
			Output: {
				type: T
				value: {
					id: string
					name: string
					color: Extract<NotionProp, { type: 'select' }>['select']['color']
				}[]
			}
			Schema: T | { type: T; multiple: true }
	  }

export const selectFieldParser: FieldParser<SelectField> = {
	fieldType: 'select',
	inputTypes: ['select', 'multi_select', 'status'],
	parse(_, value) {
		if (value.type === 'select')
			return {
				type: 'select',
				value: {
					id: value.select.id,
					name: value.select.name,
					color: value.select.color,
				},
			}
		else if (value.type === 'multi_select')
			return {
				type: 'select',
				value: value.multi_select.map(({ id, name, color }) => ({
					id,
					name,
					color,
				})),
			}
	},
}
