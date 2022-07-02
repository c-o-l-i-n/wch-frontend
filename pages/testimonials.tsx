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
import getData, { getSiteInfo } from '../utils/data'
import SEO from '../components/SEO'
import { metaDescriptionFromHtml } from '../utils/pipes'

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
			<SEO
				seo={{
					title: testimonialsPage.title,
					description: metaDescriptionFromHtml(
						`${testimonialsPage.pageBody} ${testimonials[0].name} from ${testimonials[0].location}: ${testimonials[0].text}`
					),
				}}
				siteInfo={siteInfo}
			/>
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
		getSiteInfo(),
	])

	return {
		props: { testimonialsPage, testimonials, siteInfo },
	}
}

export default TestimonialsPage
