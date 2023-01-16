import CmsImage from '../cmsImage'
import CmsImageData from '../cmsImageData'

type House = {
	id: number
	thumbnail: CmsImage
	briefDescription: string
	bedrooms: number
	wholeBathrooms: number
	halfBathrooms: number
	squareFeet: number
	photos: { data: Array<CmsImageData> }
	detailedDescription: string
}

export default House
