import { FieldBase, FieldParser, NotionProp } from '..'

export type FilesField<K extends NotionProp['type'] = 'files'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const filesFieldParser: FieldParser<FilesField> = {
	notionKey: 'files',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
			urls: value.files.map((file) => {
				if (file.type === 'file') return file.file.url
				else if (file.type === 'external') return file.external.url
				else return undefined
			}),
		}
	},
}
