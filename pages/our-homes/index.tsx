import { Heading, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import SiteInformation from '../../types/CmsSingleTypes/siteInformation'
import getData from '../../utils/data'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import Head from 'next/head'
import House from '../../types/CmsCollectionTypes/house'
import HouseCard from '../../components/HouseCard'
import Markdown from '../../components/Markdown'
import SimplePage from '../../types/CmsSingleTypes/simplePage'

type Props = {
	ourHomesPage: SimplePage
	houses: Array<House>
	siteInfo: SiteInformation
}

const OurHomes = ({ ourHomesPage, houses, siteInfo }: Props) => {
	const [shouldHave2Columns] = useMediaQuery('(min-width: 45rem)')

	return (
		<>
			<Head>
				<title>Our Homes | {siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Markdown text={ourHomesPage.pageBody} siteInfo={siteInfo} />
					<SimpleGrid
						w={'full'}
						columns={[shouldHave2Columns ? 2 : 1, 2, 3]}
						spacing={['1rem', '2rem']}
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
	const [ourHomesPage, houses, siteInfo] = await Promise.all([
		getData('our-homes-page'),
		getData('houses?populate=thumbnail'),
		getData('site-information?populate=*'),
	])

	return {
		props: { ourHomesPage, houses, siteInfo },
	}
}

export default OurHomes
