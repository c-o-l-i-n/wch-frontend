import Navbar from './Navbar'
import Footer from './Footer'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Head from 'next/head'

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
			<Navbar siteInfo={siteInfo} />
			<main>{children}</main>
			<Footer siteInfo={siteInfo} />
		</>
	)
}

export default Layout
