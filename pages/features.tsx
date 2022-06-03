import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData from '../utils/data'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import CmsRichText from '../components/CmsRichText'
import TwoColumnPage from '../types/CmsSingleTypes/twoColumnPage'
import { Box, Stack } from '@chakra-ui/react'

type Props = {
	standardFeaturesPage: TwoColumnPage
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
					<CmsRichText
						text={standardFeaturesPage.pageTop}
						siteInfo={siteInfo}
					/>
					<Stack
						direction={['column', 'row']}
						spacing={[0, '2rem']}
						mb={'2rem'}
					>
						<Box width={'full'}>
							<CmsRichText
								text={standardFeaturesPage.leftColumn}
								siteInfo={siteInfo}
							/>
						</Box>
						<Box width={'full'}>
							<CmsRichText
								text={standardFeaturesPage.rightColumn}
								siteInfo={siteInfo}
							/>
						</Box>
					</Stack>
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
