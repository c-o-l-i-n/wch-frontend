import { Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Markdown from '../components/Markdown'
import TestimonialCard from '../components/TestimonialCard'
import Testimonial from '../types/CmsCollectionTypes/testimonial'
import SimplePage from '../types/CmsSingleTypes/simplePage'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData from '../utils/data'

type Props = {
	testimonialsPage: SimplePage
	testimonials: Array<Testimonial>
	siteInfo: SiteInformation
}

const testimonials = ({ testimonialsPage, testimonials, siteInfo }: Props) => {
	return (
		<Layout siteInfo={siteInfo}>
			<Container>
				<Markdown text={testimonialsPage.pageBody} siteInfo={siteInfo} />
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

export const getStaticProps: GetStaticProps = async () => {
	const [testimonialsPage, testimonials, siteInfo] = await Promise.all([
		getData('testimonials-page'),
		getData('testimonials?sort=order'),
		getData('site-information?populate=*'),
	])

	return {
		props: { testimonialsPage, testimonials, siteInfo },
	}
}

export default testimonials
