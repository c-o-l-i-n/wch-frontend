import Navbar from './Navbar'
import Footer from './Footer'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

type Props = {
	siteInfo: SiteInformation
	children: React.ReactNode
}

const Layout = ({ siteInfo, children }: Props) => {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href={siteInfo.favicon.data.attributes.url} />
			</Head>
			<Flex direction={'column'} minHeight={'100vh'}>
				<Navbar siteInfo={siteInfo} />
				<main style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
					{children}
				</main>
				<Footer siteInfo={siteInfo} />
			</Flex>
		</>
	)
}

export default Layout
