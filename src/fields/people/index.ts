import { FieldBase, FieldParser, NotionProp } from '..'

export type PeopleField<K extends NotionProp['type'] = 'people'> =
	FieldBase<K> & {
		additional: {}
		definitionSchema: {
			type: K
		}
	}

export const peopleFieldParser: FieldParser<PeopleField> = {
	notionKey: 'people',
	parse(value) {
		if (!value) return undefined
		return {
			...value,
		}
	},
}
