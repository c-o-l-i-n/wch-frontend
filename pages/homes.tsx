import { Heading, Wrap } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData from '../utils/data'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import House from '../types/CmsCollectionTypes/house'
import HouseCard from '../components/HouseCard'

type Props = {
	houses: Array<House>
	siteInfo: SiteInformation
}

const OurHomes = ({ houses, siteInfo }: Props) => {
	return (
		<>
			<Head>
				<title>Our Homes | {siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Heading mt={[0, '1rem']} mb={['1rem', '2rem']}>
						Our Homes
					</Heading>
					<Wrap
						w={'full'}
						spacing={['1rem', '2rem']}
						overflow={'visible'}
						mb={'3rem'}
					>
						{houses.map((house, index) => (
							<HouseCard key={index} house={house} />
						))}
					</Wrap>
				</Container>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const [houses, siteInfo] = await Promise.all([
		getData('houses?populate=*'),
		getData('site-information?populate=*'),
	])

	return {
		props: { houses, siteInfo },
	}
}

export default OurHomes
