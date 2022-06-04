import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData from '../utils/data'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import CmsRichText from '../components/CmsRichText'
import SimplePage from '../types/CmsSingleTypes/simplePage'
import { Box } from '@chakra-ui/react'

type Props = {
	aboutUsPage: SimplePage
	siteInfo: SiteInformation
}

const AboutUsPage = ({ aboutUsPage, siteInfo }: Props) => {
	return (
		<>
			<Head>
				<title>
					{aboutUsPage.title} | {siteInfo.websiteName}
				</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Box mb={'2rem'}>
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
		getData('site-information?populate=*'),
	])

	return {
		props: { aboutUsPage, siteInfo },
	}
}

export default AboutUsPage
