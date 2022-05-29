import CmsImage from '../cmsImage'

type House = {
	id: number
	thumbnail: CmsImage
	briefDescription: string
	bedrooms: number
	wholeBathrooms: number
	halfBathrooms: number
	squareFeet: number
	photos: Array<CmsImage>
	detailedDescription: string
}

export default House
