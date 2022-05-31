import { Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import TestimonialCard from '../components/TestimonialCard'
import Testimonial from '../types/CmsCollectionTypes/testimonial'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData from '../utils/data'

type Props = {
	testimonials: Array<Testimonial>
	siteInfo: SiteInformation
}

const testimonials = ({ testimonials, siteInfo }: Props) => {
	return (
		<Layout siteInfo={siteInfo}>
			<Container>
				<Heading>Testimonials</Heading>
				<Text>
					We are Stark County’s premiere custom home builder, but don’t take our
					word for it. See what our customers say about us!
				</Text>
				<SimpleGrid columns={[1, 2]} spacing={'3rem'} my={'3rem'}>
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={index}
							testimonial={testimonial}
							index={index}
						/>
					))}
				</SimpleGrid>
			</Container>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const [testimonials, siteInfo] = await Promise.all([
		getData('testimonials?sort=order'),
		getData('site-information?populate=*'),
	])

	return {
		props: { testimonials, siteInfo },
	}
}

export default testimonials
