import CmsImage from '../cmsImage'
import NavbarItem from '../navbarItem'

type SiteInformation = {
	logo: CmsImage
	favicon: CmsImage
	websiteName: string
	companyLegalName: string
	phone: string
	location: string
	navbarItems: Array<NavbarItem>
	footer: string
	formspreeContactFormId: string
}

export default SiteInformation
