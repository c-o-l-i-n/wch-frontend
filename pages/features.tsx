import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData from '../utils/data'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import Markdown from '../components/Markdown'
import SimplePage from '../types/CmsSingleTypes/simplePage'

type Props = {
	standardFeaturesPage: SimplePage
	siteInfo: SiteInformation
}

const StandardFeaturesPage = ({ standardFeaturesPage, siteInfo }: Props) => {
	return (
		<>
			<Head>
				<title>Standard Features | {siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Markdown text={standardFeaturesPage.pageBody} siteInfo={siteInfo} />
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const [standardFeaturesPage, siteInfo] = await Promise.all([
		getData('standard-features-page'),
		getData('site-information?populate=*'),
	])

	return {
		props: { standardFeaturesPage, siteInfo },
	}
}

export default StandardFeaturesPage
