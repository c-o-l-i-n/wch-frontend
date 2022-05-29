import { Button, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'

type Props = {
	siteInfo: SiteInformation
}

const PageNotFound = () => {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>Page Not Found</title>
			</Head>
			<VStack spacing={'2rem'} justifyContent={'center'} h={'100vh'}>
				<Text fontSize={'2.5rem'}>😕 Page Not Found</Text>
				<Button
					color={'white'}
					backgroundColor={'brand'}
					_hover={{ backgroundColor: 'brandDark' }}
					onClick={() => router.back()}
				>
					Back
				</Button>
			</VStack>
		</>
	)
}

export default PageNotFound
