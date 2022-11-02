import { FieldType, NotionProp } from '../types'

export interface PhoneNumberField<T extends NotionProp['type'] = 'phone_number'>
	extends FieldType<T> {}

export const phoneNumberParser: PhoneNumberField['parser'] = (_, value) => {
	return value
}
