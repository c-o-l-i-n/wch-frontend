export default interface CmsMediaData {
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
