import type { GetServerSideProps, NextPage } from 'next'
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
			<h1>Houses</h1>
			<ul>
				{houses.map((house, index) => (
					<li key={index}>
						House {index + 1}
						<ul>
							<li>{house.briefDescription}</li>
							<li>{house.squareFeet} sqft</li>
							<li>{house.bedrooms} bedrooms</li>
							<li>{house.wholeBathrooms} whole bathrooms</li>
							<li>{house.halfBathrooms} half bathrooms</li>
						</ul>
					</li>
				))}
			</ul>

			<h1>Testimonials</h1>
			<ul>
				{testimonials.map((testimonial, index) => (
					<li key={index}>
						{testimonial.name} from {testimonial.location}:
						<ul>
							<li>{testimonial.text}</li>
						</ul>
					</li>
				))}
			</ul>

			<h1>Contact Us</h1>
			<p>Email: {contactInfo.email}</p>
			<p>Phone: {formatPhoneNumber(contactInfo.phone)}</p>
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
