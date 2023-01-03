import Head from 'next/head'

const AdminPage = () => {
	return (
		<>
			<Head>
				<title>WCH CMS</title>
			</Head>
			<iframe
				src='https://web-hosting-291602.uk.r.appspot.com/admin/content-manager'
				frameBorder='0'
				style={{ height: '100vh', width: '100vw' }}
			></iframe>
		</>
	)
}

export default AdminPage
