import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import type { GetStaticProps, GetStaticPaths } from 'next'
import SiteInformation from '../../types/CmsSingleTypes/siteInformation'
import getData from '../../utils/data'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import Head from 'next/head'
import House from '../../types/CmsCollectionTypes/house'
import { FaBath, FaBed, FaRuler } from 'react-icons/fa'
import '@splidejs/react-splide/css'
import Carousel from '../../components/Carousel'
import CmsRichText from '../../components/CmsRichText'

type Props = {
	house: House
	siteInfo: SiteInformation
}

const HouseDetails = ({ house, siteInfo }: Props) => {
	let bathrooms = `${house.wholeBathrooms} Whole`

	if (house.halfBathrooms) {
		bathrooms += `, ${house.halfBathrooms} Half Bathroom${
			house.halfBathrooms === 1 ? '' : 's'
		}`
	} else {
		bathrooms += ` Bathroom${house.wholeBathrooms === 1 ? '' : 's'}`
	}

	const iconSpacing = '0.75rem'

	return (
		<>
			<Head>
				<title>Our Homes | {siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Carousel photos={house.photos.data} shouldFill />
					<VStack
						fontSize={'1.25rem'}
						fontWeight={'bold'}
						alignItems={'flex-start'}
						lineHeight={'1.15'}
						spacing={'0.75rem'}
					>
						<HStack spacing={iconSpacing}>
							<FaBed />
							<Text>
								{house.bedrooms} Bedroom{house.bedrooms === 1 ? '' : 's'}
							</Text>
						</HStack>
						<HStack spacing={iconSpacing}>
							<FaBath />
							<Text>{bathrooms}</Text>
						</HStack>
						<HStack spacing={iconSpacing}>
							<FaRuler />
							<Text>
								{house.squareFeet.toLocaleString()} ft<sup>2</sup>
							</Text>
						</HStack>
					</VStack>
					<Box mt={'1.5rem'} mb={'3rem'}>
						<CmsRichText text={house.detailedDescription} siteInfo={siteInfo} />
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const houses: Array<House> = await getData('houses')

	return {
		paths: houses.map((house) => ({
			params: {
				id: house.id.toString(),
			},
		})),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) {
		return {
			notFound: true,
		}
	}

	const [house, siteInfo] = await Promise.all([
		getData(`houses/${params.id}?populate=*`),
		getData('site-information?populate=*'),
	])

	return {
		props: { house, siteInfo },
	}
}

export default HouseDetails
