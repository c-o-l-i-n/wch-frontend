import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import type { GetStaticProps, GetStaticPaths } from 'next'
import SiteInformation from '../../types/CmsSingleTypes/siteInformation'
import getData, { getSiteInfo } from '../../utils/data'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import House from '../../types/CmsCollectionTypes/house'
import { FaBath, FaBed, FaRuler } from 'react-icons/fa'
import Carousel from '../../components/Carousel'
import CmsRichText from '../../components/CmsRichText'
import SEO from '../../components/SEO'
import { metaDescriptionFromHtml } from '../../utils/pipes'
import Link from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

type Props = {
	house: House
	siteInfo: SiteInformation
}

const HouseDetails = ({ house, siteInfo }: Props) => {
	let bathrooms = `${house.wholeBathrooms} Full`

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
			<SEO
				seo={{
					title: house.briefDescription,
					description: metaDescriptionFromHtml(house.detailedDescription),
					shareImage: house.thumbnail,
				}}
				siteInfo={siteInfo}
			/>
			<Layout siteInfo={siteInfo}>
				<Container thin>
				<Link href={'/gallery'} passHref>
					<Button
						as={'a'}
						variant='link'
						leftIcon={<ArrowBackIcon />}
						color={'brand'}
					>
						Back
					</Button>
				</Link>
					<Carousel photos={house.photos.data} />
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
								{house.squareFeet.toLocaleString()} Square Feet
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
		getSiteInfo(),
	])

	return {
		props: { house, siteInfo },
	}
}

export default HouseDetails
