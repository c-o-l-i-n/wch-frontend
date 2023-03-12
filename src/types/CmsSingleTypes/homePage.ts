import Testimonial from '../CmsCollectionTypes/testimonial'
import CmsMedia from '../cmsMedia'

export default interface HomePage {
	heroImage: CmsMedia
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
