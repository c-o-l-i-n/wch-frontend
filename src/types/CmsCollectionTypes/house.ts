import CmsMedia from '../cmsMedia'
import CmsMediaData from '../cmsMediaData'

export default interface House {
	id: number
	thumbnail: CmsMedia
	briefDescription: string
	bedrooms: number
	fullBathrooms: number
	halfBathrooms: number
	squareFeet: number
	photos: { data: Array<CmsMediaData> }
	floorPlan: CmsMedia
	detailedDescription: string
}
