import { Box, Heading, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import SiteInformation from '../../types/CmsSingleTypes/siteInformation'
import getData, { getSiteInfo } from '../../utils/data'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import House from '../../types/CmsCollectionTypes/house'
import HouseCard from '../../components/HouseCard'
import CmsRichText from '../../components/CmsRichText'
import SimplePage from '../../types/CmsSingleTypes/simplePage'
import SEO from '../../components/SEO'
import { metaDescriptionFromHtml } from '../../utils/pipes'

type Props = {
	galleryPage: SimplePage
	houses: Array<House>
	siteInfo: SiteInformation
}

const Gallery = ({ galleryPage, houses, siteInfo }: Props) => {
	const [shouldHave2Columns] = useMediaQuery('(min-width: 45rem)')

	return (
		<>
			<SEO
				seo={{
					title: galleryPage.title,
					description: metaDescriptionFromHtml(galleryPage.pageBody),
				}}
				siteInfo={siteInfo}
			/>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Box mb={'2rem'}>
						<CmsRichText text={galleryPage.pageBody} siteInfo={siteInfo} />
					</Box>
					<SimpleGrid
						w={'full'}
						columns={[shouldHave2Columns ? 2 : 1, 2, 3]}
						spacing={'2rem'}
						overflow={'visible'}
						mb={'3rem'}
					>
						{houses.map((house, index) => (
							<HouseCard key={index} house={house} />
						))}
					</SimpleGrid>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const [galleryPage, houses, siteInfo] = await Promise.all([
		getData('our-homes-page'),
		getData('houses?populate=thumbnail'),
		getSiteInfo(),
	])

	return {
		props: { galleryPage, houses, siteInfo },
	}
}

export default Gallery
