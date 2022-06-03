import {
	Box,
	Heading,
	ListItem,
	SimpleGrid,
	Stack,
	UnorderedList,
	VStack,
} from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Testimonial from '../types/CmsCollectionTypes/testimonial'
import getData from '../utils/data'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import HomePage from '../types/CmsSingleTypes/homePage'
import Markdown from '../components/Markdown'
import ContactForm from '../components/ContactForm'
import Phone from '../components/Phone'
import TestimonialCard from '../components/TestimonialCard'

type Props = {
	homePage: HomePage
	siteInfo: SiteInformation
}

const HomePage = ({ homePage, siteInfo }: Props) => {
	return (
		<>
			<Head>
				<title>{siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Hero {...homePage} />
				<Container>
					<Stack direction={['column-reverse', 'row']}>
						<Box width={['full', '55%']} mt={'3rem'} mr={[0, '4rem']}>
							<Markdown text={homePage.pageBody} siteInfo={siteInfo} />
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
					<Heading mt={'2rem'}>See what our customers are saying</Heading>
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
		getData('site-information?populate=*'),
	])

	return {
		props: { homePage, siteInfo },
	}
}

export default HomePage
