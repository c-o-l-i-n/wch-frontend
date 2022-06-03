import { Stack, VStack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import CmsRichText from '../components/CmsRichText'
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

const TestimonialsPage = ({
	testimonialsPage,
	testimonials,
	siteInfo,
}: Props) => {
	const splitInHalf = (list: Array<Testimonial>) => {
		const half = Math.ceil(list.length / 2)

		const firstHalf = list.slice(0, half)
		const secondHalf = list.slice(half)

		return [firstHalf, secondHalf]
	}

	return (
		<>
			<Head>
				<title>Testimonials | {siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Container>
					<CmsRichText text={testimonialsPage.pageBody} siteInfo={siteInfo} />
					<Stack direction={['column', 'row']} spacing={'3rem'} my={'3rem'}>
						{splitInHalf(testimonials).map((half, index) => (
							<VStack key={index} spacing={'3rem'} width={'full'}>
								{half.map((testimonial, index) => (
									<TestimonialCard
										key={index}
										testimonial={testimonial}
										index={index}
									/>
								))}
							</VStack>
						))}
					</Stack>
				</Container>
			</Layout>
		</>
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

export default TestimonialsPage
