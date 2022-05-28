import SiteInformation from '../types/CmsSingleTypes/siteInformation'

export const formatPhoneNumber = (phoneNumber: string) =>
	`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(
		6
	)}`

export const populateShortCodes = (text: string, siteInfo: SiteInformation) =>
	text
		.replace('[currentYear]', new Date().getFullYear().toString())
		.replace('[websiteName]', siteInfo.websiteName)
		.replace('[companyLegalName]', siteInfo.companyLegalName)
		.replace('[phone]', formatPhoneNumber(siteInfo.phone))
		.replace('[email]', siteInfo.email)
		.replace('[location]', siteInfo.location)
