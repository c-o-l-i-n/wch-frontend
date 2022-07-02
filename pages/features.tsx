import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData, { getSiteInfo } from '../utils/data'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import CmsRichText from '../components/CmsRichText'
import TwoColumnPage from '../types/CmsSingleTypes/twoColumnPage'
import { Box, Stack } from '@chakra-ui/react'
import SEO from '../components/SEO'
import { metaDescriptionFromHtml } from '../utils/pipes'

type Props = {
	standardFeaturesPage: TwoColumnPage
	siteInfo: SiteInformation
}

const StandardFeaturesPage = ({ standardFeaturesPage, siteInfo }: Props) => {
	return (
		<>
			<SEO
				seo={{
					title: standardFeaturesPage.title,
					description: metaDescriptionFromHtml(
						standardFeaturesPage.pageTop + standardFeaturesPage.leftColumn
					),
				}}
				siteInfo={siteInfo}
			/>
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
		getSiteInfo(),
	])

	return {
		props: { standardFeaturesPage, siteInfo },
	}
}

export default StandardFeaturesPage
