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

export const extractTextFromHtml = (html: string) => {
	// if server side rendering (dev environment)
	if (typeof window === 'undefined') {
		return html
	}

	const span = document.createElement('span')
	span.innerHTML = html

	// skip page heading
	if (span.firstElementChild?.tagName === 'H1') {
		span.removeChild(span.firstElementChild)
	}

	const children = Array.from(span.querySelectorAll('*'))

	children.forEach((node) => {
		// skip OL and UL nodes to avoid duplication with LI nodes
		if (node.tagName === 'OL' || node.tagName === 'UL') {
			return
		}

		if (node.textContent) {
			if (node.tagName.match(/^H[1-6]$/)) {
				// add ' -' after headings
				node.textContent += ' -'
			}
			if (node.tagName === 'LI' && node.textContent.at(-2)?.match(/\w/)) {
				// add '.' after list items
				node.textContent += '.'
			}
		}
		node.textContent += ' '
	})

	return (span.textContent || span.innerText).toString().replace(/ +/g, ' ')
}

export const metaDescriptionFromHtml = (html: string) => {
	// if server side rendering (dev environment), return unmodified HTML
	if (typeof window === 'undefined') {
		return html
	}

	const maxLength = 150

	const extractedText = extractTextFromHtml(html)

	if (extractedText.length <= maxLength) {
		return extractedText
	}

	const text = extractedText.substring(0, maxLength)

	const lastIndex = Array.from(text.matchAll(/\W/g)).at(-1)?.index

	return text.substring(0, lastIndex) + '…'
}
