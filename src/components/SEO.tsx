import Head from 'next/head'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import SeoData from '../types/SeoData'

type Props = {
	seo?: Partial<SeoData>
	siteInfo: SiteInformation
}
const SEO = ({ seo, siteInfo }: Props) => {
	const globalSeo = siteInfo.globalSeo

	const title = seo?.title ?? globalSeo.title
	const description = seo?.description ?? globalSeo.description
	const shareImage = seo?.shareImage ?? globalSeo.shareImage

	return (
		<Head>
			{/* Title */}
			<title>{title}</title>
			<meta property='og:title' key='og:title' content={title} />

			{/* Description */}
			<meta name='description' key='description' content={description} />
			<meta name='og:description' key='og:description' content={description} />

			{/* Type */}
			<meta property='og:type' content='website' />

			{/* Share Image */}
			<meta
				property='og:image'
				key='og:image'
				content={shareImage.data.attributes.formats.large?.url ?? shareImage.data.attributes.url}
			/>
			<meta
				name='twitter:card'
				key='twitter:card'
				content='summary_large_image'
			/>
		</Head>
	)
}

export default SEO
