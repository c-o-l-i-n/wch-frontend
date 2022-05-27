import { FunctionComponent } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
	children: React.ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
