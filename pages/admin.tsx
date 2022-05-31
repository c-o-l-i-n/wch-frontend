import Head from 'next/head'

const Admin = () => {
	return (
		<>
			<Head>
				<title>CMS</title>
			</Head>
			<iframe
				src='https://williamscustomhomes.herokuapp.com/admin/content-manager'
				frameBorder='0'
				style={{ height: '100vh', width: '100vw' }}
			></iframe>
		</>
	)
}

export default Admin
