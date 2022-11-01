import { FieldBase, FieldParser, NotionProp } from '..'

export type PhoneNumberField<K extends NotionProp['type'] = 'phone_number'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const phoneNumberFieldParser: FieldParser<PhoneNumberField> = {
	notionKey: 'phone_number',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
