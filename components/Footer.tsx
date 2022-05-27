import {
	Box,
	chakra,
	HStack,
	Link,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
	VStack,
	Image,
} from '@chakra-ui/react'
import Container from './Container'

const Footer = () => {
	return (
		<Box backgroundColor='gray.700' color='white' py={'3rem'}>
			<Container>
				<Stack
					direction={['column', 'row']}
					justifyContent='space-between'
					spacing='2rem'
				>
					<Box textAlign={['center', 'left']}>
						<Text mb={'1rem'}>
							Copyright &copy; {new Date().getFullYear()} Williams Custom Homes,
							LLC
						</Text>
						<Text>Stark County, Ohio</Text>
						<Text>(330) 904-7520</Text>
					</Box>
					<Image
						src='/images/equal-housing.svg'
						alt='Equal Housing Opportunity'
						h='3rem'
					></Image>
				</Stack>
			</Container>
		</Box>
	)
}

export default Footer
