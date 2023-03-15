import { Box, Heading, Stack, VStack } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData, { getSiteInfo } from '../utils/data'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Layout from '../components/Layout'
import HomePageType from '../types/CmsSingleTypes/homePage'
import CmsRichText from '../components/CmsRichText'
import ContactForm from '../components/ContactForm'
import Phone from '../components/Phone'
import TestimonialCard from '../components/TestimonialCard'
import SEO from '../components/SEO'

type Props = {
	homePage: HomePageType
	siteInfo: SiteInformation
}

const HomePage = ({ homePage, siteInfo }: Props) => {
	return (
		<>
			<SEO siteInfo={siteInfo} />
			<Layout siteInfo={siteInfo}>
				<Hero {...homePage} />
				<Container>
					<Stack direction={['column-reverse', 'row']}>
						<Box width={['full', '55%']} mt={'3rem'} mr={[0, '4rem']}>
							<CmsRichText text={homePage.pageBody} siteInfo={siteInfo} />
							<Phone siteInfo={siteInfo} />
						</Box>
						<Box width={['full', '45%']}>
							<ContactForm
								siteInfo={siteInfo}
								formHeading={homePage.contactFormHeading}
								shouldHaveNegativeTopMargin
							/>
						</Box>
					</Stack>
					<Heading mt={'2rem'}>{homePage.featuredTestimonialsHeading}</Heading>
					<VStack spacing={'3rem'} my={'3rem'}>
						{homePage.featuredTestimonials.data.map(
							(testimonialData, index) => (
								<TestimonialCard
									key={index}
									testimonial={testimonialData.attributes}
									index={index}
								/>
							)
						)}
					</VStack>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const [homePage, siteInfo] = await Promise.all([
		getData('home-page?populate=*'),
		getSiteInfo(),
	])

	return {
		props: {
			homePage,
			siteInfo: siteInfo,
		},
	}
}

export default HomePage
