import { Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import House from '../types/CmsCollectionTypes/house'
import Testimonial from '../types/CmsCollectionTypes/testimonial'
import getData from '../utils/data'
import { formatPhoneNumber } from '../utils/pipes'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import HomePage from '../types/CmsSingleTypes/homePage'

type Props = {
	homePage: HomePage
	houses: Array<House>
	testimonials: Array<Testimonial>
	siteInfo: SiteInformation
}

const Home = ({ homePage, houses, testimonials, siteInfo }: Props) => {
	return (
		<>
			<Head>
				<title>{siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Hero {...homePage} />
				<Container>
					<Heading mt={'2rem'}>Houses</Heading>
					<UnorderedList>
						{houses.map((house, index) => (
							<ListItem key={index}>
								House {index + 1}
								<UnorderedList>
									<ListItem>{house.briefDescription}</ListItem>
									<ListItem>{house.squareFeet} sqft</ListItem>
									<ListItem>{house.bedrooms} bedrooms</ListItem>
									<ListItem>{house.wholeBathrooms} whole bathrooms</ListItem>
									<ListItem>{house.halfBathrooms} half bathrooms</ListItem>
								</UnorderedList>
							</ListItem>
						))}
					</UnorderedList>

					<Heading mt={'2rem'}>Testimonials</Heading>
					<UnorderedList>
						{testimonials.map((testimonial, index) => (
							<ListItem key={index}>
								{testimonial.name} from {testimonial.location}:
								<UnorderedList>
									<ListItem>{testimonial.text}</ListItem>
								</UnorderedList>
							</ListItem>
						))}
					</UnorderedList>

					<Heading mt={'2rem'}>Contact Us</Heading>
					<Text>Email: {siteInfo.email}</Text>
					<Text mb={'2rem'}>Phone: {formatPhoneNumber(siteInfo.phone)}</Text>
				</Container>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const [homePage, houses, testimonials, siteInfo] = await Promise.all([
		getData('home-page?populate=*'),
		getData('houses'),
		getData('testimonials'),
		getData('site-information?populate=*'),
	])

	return {
		props: { homePage, houses, testimonials, siteInfo },
	}
}

export default Home
