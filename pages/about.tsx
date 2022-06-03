import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData from '../utils/data'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import Markdown from '../components/Markdown'
import SimplePage from '../types/CmsSingleTypes/simplePage'

type Props = {
	aboutUsPage: SimplePage
	siteInfo: SiteInformation
}

const AboutUsPage = ({ aboutUsPage, siteInfo }: Props) => {
	return (
		<>
			<Head>
				<title>About Us | {siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Markdown text={aboutUsPage.pageBody} siteInfo={siteInfo} />
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
