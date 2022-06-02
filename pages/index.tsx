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
	testimonials: Array<Testimonial>
	siteInfo: SiteInformation
}

const Home = ({ homePage, testimonials, siteInfo }: Props) => {
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
								formHeading={homePage.contactFormHeading}
								shouldHaveNegativeTopMargin
							/>
						</Box>
					</Stack>
					<Heading mt={'2rem'}>See what our customers are saying</Heading>
					<VStack spacing={'3rem'} my={'3rem'}>
						{testimonials.map((testimonial, index) => (
							<TestimonialCard
								key={index}
								testimonial={testimonial}
								index={index}
							/>
						))}
					</VStack>
				</Container>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const [homePage, testimonials, siteInfo] = await Promise.all([
		getData('home-page?populate=*'),
		getData(
			'testimonials?sort=order&pagination[page]=1&pagination[pageSize]=2'
		),
		getData('site-information?populate=*'),
	])

	return {
		props: { homePage, testimonials, siteInfo },
	}
}

export default Home
