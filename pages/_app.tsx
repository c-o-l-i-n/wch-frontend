import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'

const theme = extendTheme({
	breakpoints: {
		sm: '40rem',
	},
	colors: {
		brand: '#2a7fff',
		brandDark: '#005ce6',
	},
})

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
