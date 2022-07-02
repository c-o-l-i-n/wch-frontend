import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
	thin?: boolean
	children: ReactNode
}
const Container = ({ thin, children }: Props) => {
	return (
		<Box
			w={'full'}
			maxWidth={thin ? '700px' : '1280px'}
			mx={'auto'}
			px={'1.5rem'}
		>
			{children}
		</Box>
	)
}

export default Container
