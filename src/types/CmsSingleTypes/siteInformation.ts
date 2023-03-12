import CmsMedia from '../cmsMedia'
import NavbarItem from '../navbarItem'
import SeoData from '../SeoData'

export default interface SiteInformation {
	logo: CmsMedia
	favicon: CmsMedia
	websiteName: string
	companyLegalName: string
	phone: string
	location: string
	navbarItems: Array<NavbarItem>
	footer: string
	globalSeo: SeoData
	formspreeContactFormId: string
}
