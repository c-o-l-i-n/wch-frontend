import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData, { getSiteInfo } from '../utils/data'
import Container from '../components/Container'
import Layout from '../components/Layout'
import CmsRichText from '../components/CmsRichText'
import SimplePage from '../types/CmsSingleTypes/simplePage'
import { Box } from '@chakra-ui/react'
import SEO from '../components/SEO'
import { metaDescriptionFromHtml } from '../utils/pipes'

type Props = {
	featuredNeighborhood: SimplePage
	siteInfo: SiteInformation
}

const FeaturedNeighborhoodPage = ({
	featuredNeighborhood,
	siteInfo,
}: Props) => {
	return (
		<>
			<SEO
				seo={{
					title: featuredNeighborhood.title,
					description: metaDescriptionFromHtml(featuredNeighborhood.pageBody),
				}}
				siteInfo={siteInfo}
			/>
			<Layout siteInfo={siteInfo}>
				<Container thin>
					<Box mb={'3rem'}>
						<CmsRichText
							text={featuredNeighborhood.pageBody}
							siteInfo={siteInfo}
						/>
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const [featuredNeighborhood, siteInfo] = await Promise.all([
		getData('featured-neighborhood'),
		getSiteInfo(),
	])

	return {
		props: { featuredNeighborhood, siteInfo },
	}
}

export default FeaturedNeighborhoodPage
