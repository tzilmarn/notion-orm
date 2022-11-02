import { FieldType, NotionProp } from '../types'

export interface FilesField<T extends NotionProp['type'] = 'files'>
	extends FieldType<T, {}, { urls: string[] }> {}

export const filesParser: FilesField['parser'] = (_, value) => {
	return {
		...value,
		urls: value.files
			.map((file) => {
				if (file.type === 'file') return file.file.url
				else if (file.type === 'external') return file.external.url
				else return undefined
			})
			.filter((url: string | undefined): url is string => !!url),
	}
}
