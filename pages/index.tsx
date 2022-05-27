import { Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import ContactInformation from '../types/contactInformation'
import House from '../types/house'
import Testimonial from '../types/testimonial'
import getData from '../utils/data'
import { formatPhoneNumber } from '../utils/pipes'

type Props = {
	houses: Array<House>
	testimonials: Array<Testimonial>
	contactInfo: ContactInformation
}

const Home = ({ houses, testimonials, contactInfo }: Props) => {
	return (
		<>
			<Heading>Houses</Heading>
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

			<Heading>Testimonials</Heading>
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

			<Heading>Contact Us</Heading>
			<Text>Email: {contactInfo.email}</Text>
			<Text>Phone: {formatPhoneNumber(contactInfo.phone)}</Text>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const [houses, testimonials, contactInfo] = await Promise.all([
		getData('houses'),
		getData('testimonials'),
		getData('contact-information'),
	])

	return {
		props: {
			houses: houses,
			testimonials: testimonials,
			contactInfo: contactInfo,
		},
	}
}

export default Home
