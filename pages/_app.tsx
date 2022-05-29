import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'

export const theme = extendTheme({
	breakpoints: {
		sm: '48rem',
	},
	colors: {
		brandLight: '#cce0ff',
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
