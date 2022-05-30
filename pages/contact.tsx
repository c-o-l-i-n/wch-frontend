import { Box, Stack } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import getData from '../utils/data'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Head from 'next/head'
import Markdown from '../components/Markdown'
import ContactForm from '../components/ContactForm'
import ContactPage from '../types/CmsSingleTypes/contactPage'
import Email from '../components/Email'
import Phone from '../components/Phone'

type Props = {
	contactPage: ContactPage
	siteInfo: SiteInformation
}

const Contact = ({ contactPage, siteInfo }: Props) => {
	return (
		<>
			<Head>
				<title>Contact | {siteInfo.websiteName}</title>
			</Head>
			<Layout siteInfo={siteInfo}>
				<Container>
					<Stack direction={['column', 'row']} mt={[0, '2rem']} mb={'3rem'}>
						<Box width={['full', '50%']} mr={[0, '4rem']}>
							<Markdown text={contactPage.pageBody} siteInfo={siteInfo} />
							<Phone siteInfo={siteInfo} />
							<Email siteInfo={siteInfo} />
						</Box>
						<Box width={['full', '60%']}>
							<ContactForm />
						</Box>
					</Stack>
				</Container>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const [contactPage, siteInfo] = await Promise.all([
		getData('contact-page'),
		getData('site-information?populate=*'),
	])

	return {
		props: { contactPage, siteInfo },
	}
}

export default Contact