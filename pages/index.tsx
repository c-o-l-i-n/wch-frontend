import { Box, Heading, ListItem, Stack, UnorderedList } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
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
					<Heading mt={'2rem'}>Testimonials</Heading>
					<UnorderedList mb={'3rem'}>
						{testimonials.map((testimonial, index) => (
							<ListItem key={index}>
								{testimonial.name} from {testimonial.location}:
								<UnorderedList>
									<ListItem>{testimonial.text}</ListItem>
								</UnorderedList>
							</ListItem>
						))}
					</UnorderedList>
				</Container>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const [homePage, testimonials, siteInfo] = await Promise.all([
		getData('home-page?populate=*'),
		getData('testimonials'),
		getData('site-information?populate=*'),
	])

	return {
		props: { homePage, testimonials, siteInfo },
	}
}

export default Home
