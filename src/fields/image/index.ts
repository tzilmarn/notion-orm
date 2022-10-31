import { FieldParser, NotionProp } from '..'
import { parseImage } from '../../util/parse-image'

export type ImageField<T = 'image'> = {
	Input: Extract<NotionProp, { type: 'files' }>
	Output: {
		type: T
		value: {
			type: 'file' | 'external'
			url: string
			expiry: string | undefined
		}
	}
	Schema: T | { type: T }
}

export const imageFieldParser: FieldParser<ImageField> = {
	fieldType: 'image',
	inputTypes: ['files'],
	parse(_, value) {
		const file = value.files[0]
		const image = parseImage({
			type: file.type,
			file: file.type === 'file' ? file.file : undefined,
			external: file.type === 'external' ? file.external : undefined,
			expiry_time: file.type === 'file' && file.file.expiry_time,
		})

		return {
			type: 'image',
			value: image,
		}
	},
}
