import CmsImage from '../cmsImage'
import NavbarItem from '../navbarItem'
import SeoData from '../SeoData'

type SiteInformation = {
	logo: CmsImage
	favicon: CmsImage
	websiteName: string
	companyLegalName: string
	phone: string
	location: string
	navbarItems: Array<NavbarItem>
	footer: string
	globalSeo: SeoData
	formspreeContactFormId: string
}

export default SiteInformation
