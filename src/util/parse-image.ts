export type ParsedImage = {
	type: 'file' | 'external'
	url: string
	expiry: string | undefined
}

export const parseImage = (
	image:
		| {
				type: 'file' | 'external'
				file?: { url: string }
				external?: { url: string }
				expiry_time?: string
		  }
		| undefined
) => {
	return (
		image && {
			type: image.type,
			url: image.file?.url || image?.external?.url,
			expiry: image.expiry_time,
		}
	)
}
