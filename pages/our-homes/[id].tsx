import { background, Box, HStack, Text, VStack } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import Image from 'next/image'
import SiteInformation from '../../types/CmsSingleTypes/siteInformation'
import getData from '../../utils/data'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import Head from 'next/head'
import House from '../../types/CmsCollectionTypes/house'
import { FaBath, FaBed, FaRuler } from 'react-icons/fa'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Carousel from '../../components/Carousel'
import Markdown from '../../components/Markdown'

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
						<Markdown text={house.detailedDescription} siteInfo={siteInfo} />
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	if (!context.params) {
		return {
			notFound: true,
		}
	}

	const [house, siteInfo] = await Promise.all([
		getData(`houses/${context.params.id}?populate=*`),
		getData('site-information?populate=*'),
	])

	return {
		props: { house, siteInfo },
	}
}

export default HouseDetails
