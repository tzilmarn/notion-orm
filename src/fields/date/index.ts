import { FieldParser, NotionProp } from '..'

export type DateField<T = 'date'> = {
	Input: Extract<NotionProp, { type: 'date' }>
	Output: { type: T; value: { start?: string; end?: string } }
	Schema: T | { type: T }
}

export const dateFieldParser: FieldParser<DateField> = {
	fieldType: 'date',
	inputTypes: ['date'],
	parse(_, value) {
		return {
			type: 'date',
			value: {
				start: value.date?.start,
				end: value.date?.end,
			},
		}
	},
}
