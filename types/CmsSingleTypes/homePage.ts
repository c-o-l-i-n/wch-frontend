import Testimonial from '../CmsCollectionTypes/testimonial'
import CmsImage from '../cmsImage'

type HomePage = {
	heroImage: CmsImage
	heroText: string
	primaryCallToActionButtonText: string
	primaryCallToActionButtonLink: string
	secondaryCallToActionButtonText: string
	secondaryCallToActionButtonLink: string
	contactFormHeading: string
	pageBody: string
	featuredTestimonials: { data: Array<{ attributes: Testimonial }> }
}

export default HomePage
