import Testimonial from '../CmsCollectionTypes/testimonial'
import CmsImage from '../cmsImage'

type HomePage = {
	heroImage: CmsImage
	heroText: string
	primaryCallToActionButtonText: string
	primaryCallToActionButtonLink: string
	secondaryCallToActionButtonText: string
	secondaryCallToActionButtonLink: string
	pageBody: string
	contactFormHeading: string
	featuredTestimonialsHeading: string
	featuredTestimonials: { data: Array<{ attributes: Testimonial }> }
}

export default HomePage
