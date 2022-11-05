import { fieldParsers } from '.'

describe('parsers', () => {
	// checkbox
	describe('checkbox parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.checkbox>[1] = {
				id: 'id',
				type: 'checkbox',
				checkbox: true,
			}
			const result = fieldParsers.checkbox({ type: 'checkbox' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// created_by
	describe('created_by parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.created_by>[1] = {
				id: 'id',
				type: 'created_by',
				created_by: {
					id: 'id',
					object: 'user',
					type: 'person',
					person: { email: '' },
					avatar_url: '',
					name: '',
				},
			}
			const result = fieldParsers.created_by({ type: 'created_by' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// created_time
	describe('created_time parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.created_time>[1] = {
				id: 'id',
				type: 'created_time',
				created_time: 'sometime',
			}
			const result = fieldParsers.created_time({ type: 'created_time' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// date
	describe('date parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.date>[1] = {
				id: 'id',
				type: 'date',
				date: {
					start: '',
					end: '',
					time_zone: null,
				},
			}
			const result = fieldParsers.date({ type: 'date' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// email
	describe('email parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.email>[1] = {
				id: 'id',
				type: 'email',
				email: '',
			}
			const result = fieldParsers.email({ type: 'email' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// files
	describe('files parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.files>[1] = {
				id: 'id',
				type: 'files',
				files: [],
			}
			const result = fieldParsers.files({ type: 'files' }, value)
			expect(result).toMatchObject(value)
		})
		it('should contain urls property', () => {
			const value: Parameters<typeof fieldParsers.files>[1] = {
				id: 'id',
				type: 'files',
				files: [
					{
						name: 'internal',
						type: 'file',
						file: { url: 'internal', expiry_time: '' },
					},
					{ name: 'external', type: 'external', external: { url: 'external' } },
				],
			}
			const result = fieldParsers.files({ type: 'files' }, value)
			expect(result).toMatchObject({ urls: ['internal', 'external'] })
		})
	})

	// formula
	describe('formula parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.formula>[1] = {
				id: 'id',
				type: 'formula',
				formula: {
					type: 'string',
					string: '',
				},
			}
			const result = fieldParsers.formula({ type: 'formula' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// last_edited_by
	describe('last_edited_by parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.last_edited_by>[1] = {
				id: 'id',
				type: 'last_edited_by',
				last_edited_by: {
					id: '',
					object: 'user',
					type: 'person',
					person: { email: '' },
					name: '',
					avatar_url: '',
				},
			}
			const result = fieldParsers.last_edited_by(
				{ type: 'last_edited_by' },
				value
			)
			expect(result).toMatchObject(value)
		})
	})

	// last_edited_time
	describe('last_edited_time parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.last_edited_time>[1] = {
				id: 'id',
				type: 'last_edited_time',
				last_edited_time: '',
			}
			const result = fieldParsers.last_edited_time(
				{ type: 'last_edited_time' },
				value
			)
			expect(result).toMatchObject(value)
		})
	})

	// multi_select
	describe('multi_select parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.multi_select>[1] = {
				id: 'id',
				type: 'multi_select',
				multi_select: [],
			}
			const result = fieldParsers.multi_select({ type: 'multi_select' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// number
	describe('number parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.number>[1] = {
				id: 'id',
				type: 'number',
				number: 0,
			}
			const result = fieldParsers.number({ type: 'number' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// people
	describe('people parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.people>[1] = {
				id: 'id',
				type: 'people',
				people: [],
			}
			const result = fieldParsers.people({ type: 'people' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// phone_number
	describe('phone_number parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.phone_number>[1] = {
				id: 'id',
				type: 'phone_number',
				phone_number: '',
			}
			const result = fieldParsers.phone_number({ type: 'phone_number' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// relation
	describe('relation parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.relation>[1] = {
				id: 'id',
				type: 'relation',
				relation: [],
			}
			const result = fieldParsers.relation({ type: 'relation' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// rich_text
	describe('rich_text parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.rich_text>[1] = {
				id: 'id',
				type: 'rich_text',
				rich_text: [],
			}
			const result = fieldParsers.rich_text({ type: 'rich_text' }, value)
			expect(result).toMatchObject(value)
		})
		it('should contain plainText property', () => {
			const value: Parameters<typeof fieldParsers.rich_text>[1] = {
				id: 'id',
				type: 'rich_text',
				rich_text: [{ plain_text: 'I am' }, { plain_text: 'a test' }] as any[],
			}
			const result = fieldParsers.rich_text({ type: 'rich_text' }, value)
			expect(result).toMatchObject({ plainText: 'I am a test' })
		})
	})

	// rollup
	describe('rollup parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.rollup>[1] = {
				id: 'id',
				type: 'rollup',
				rollup: {
					function: 'count',
					type: 'number',
					number: 1,
				},
			}
			const result = fieldParsers.rollup({ type: 'rollup' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// select
	describe('select parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.select>[1] = {
				id: 'id',
				type: 'select',
				select: { id: '', name: '', color: 'default' },
			}
			const result = fieldParsers.select({ type: 'select' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// status
	describe('status parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.status>[1] = {
				id: 'id',
				type: 'status',
				status: { id: '', name: '', color: 'default' },
			}
			const result = fieldParsers.status({ type: 'status' }, value)
			expect(result).toMatchObject(value)
		})
	})

	// title
	describe('title parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.title>[1] = {
				id: 'id',
				type: 'title',
				title: [],
			}
			const result = fieldParsers.title({ type: 'title' }, value)
			expect(result).toMatchObject(value)
		})
		it('should return plain text property correctly', () => {
			const value: Parameters<typeof fieldParsers.rich_text>[1] = {
				id: 'id',
				type: 'rich_text',
				rich_text: [{ plain_text: 'I am' }, { plain_text: 'a test' }] as any[],
			}
			const result = fieldParsers.rich_text({ type: 'rich_text' }, value)
			expect(result).toMatchObject({ plainText: 'I am a test' })
		})
	})

	// url
	describe('url parser', () => {
		it('should return all original fields', () => {
			const value: Parameters<typeof fieldParsers.url>[1] = {
				id: 'id',
				type: 'url',
				url: '',
			}
			const result = fieldParsers.url({ type: 'url' }, value)
			expect(result).toMatchObject(value)
		})
	})
})
