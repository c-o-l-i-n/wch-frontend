import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'

export const theme = extendTheme({
	breakpoints: {
		sm: '58rem',
		md: '69rem',
		lg: '80rem',
	},
	colors: {
		brandLight: '#cce0ff',
		brand: '#2a7fff',
		brandDark: '#005ce6',
	},
	boxShadow: '0 3px 15px #bbb',
})

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default App
