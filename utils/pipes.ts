import SiteInformation from '../types/CmsSingleTypes/siteInformation'

export const formatPhoneNumber = (phoneNumber: string) =>
	`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(
		6
	)}`

export const populateShortCodes = (text: string, siteInfo: SiteInformation) =>
	text
		.replace('[current_year]', new Date().getFullYear().toString())
		.replace('[website_name]', siteInfo.websiteName)
		.replace('[company_legal_name]', siteInfo.companyLegalName)
		.replace('[phone]', formatPhoneNumber(siteInfo.phone))
		.replace('[location]', siteInfo.location)
// .replace('[email]', siteInfo.email)
