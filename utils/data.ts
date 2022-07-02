import SiteInformation from '../types/CmsSingleTypes/siteInformation'

// const baseUrl = 'https://williamscustomhomes.herokuapp.com/api/'
const baseUrl = 'http://localhost:1337/api/'

const getData = async (endpoint: string) => {
	let data = (await (await fetch(baseUrl + endpoint)).json()).data

	if (Array.isArray(data)) {
		data = data.map((d) => ({ ...d.attributes, id: d.id }))
	} else {
		data = { ...data.attributes, id: data.id }
	}

	return data
}

export const getSiteInfo = async (): Promise<SiteInformation> => {
	const [siteInfo, siteInfoWithShareImage] = await Promise.all([
		getData('site-information?populate=*'),
		getData('site-information?populate=globalSeo.shareImage'),
	])

	return {
		...siteInfo,
		globalSeo: siteInfoWithShareImage.globalSeo,
	}
}

export default getData
