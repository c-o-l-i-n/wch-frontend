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
	aboutUsPage: SimplePage
	siteInfo: SiteInformation
}

const AboutUsPage = ({ aboutUsPage, siteInfo }: Props) => {
	return (
		<>
			<SEO
				seo={{
					title: aboutUsPage.title,
					description: metaDescriptionFromHtml(aboutUsPage.pageBody),
				}}
				siteInfo={siteInfo}
			/>
			<Layout siteInfo={siteInfo}>
				<Container thin>
					<Box mb={'3rem'}>
						<CmsRichText text={aboutUsPage.pageBody} siteInfo={siteInfo} />
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const [aboutUsPage, siteInfo] = await Promise.all([
		getData('about-us-page'),
		getSiteInfo(),
	])

	return {
		props: { aboutUsPage, siteInfo },
	}
}

export default AboutUsPage
