import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}
const Container = ({ children }: Props) => {
	return (
		<Box w={'full'} maxWidth={'1200px'} mx={'auto'} px={'1.5rem'}>
			{children}
		</Box>
	)
}

export default Container
