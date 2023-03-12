type CmsImageData = {
	attributes: {
		alternativeText: string
		url: string
		width: number
		height: number
		formats: {
			small: {
				url: string
			},
			large: {
				url: string
			}
		}
	}
}

export default CmsImageData
