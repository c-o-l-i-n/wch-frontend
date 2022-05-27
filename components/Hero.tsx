import {
	Stack,
	Flex,
	Button,
	Text,
	Heading,
	VStack,
	useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import Container from './Container'

export default function WithBackgroundImage() {
	return (
		<Flex
			w={'full'}
			h={'80vh'}
			minHeight={'min-content'}
			maxHeight={'50rem'}
			backgroundImage={'url(/images/home.jpg)'}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
		>
			<VStack
				w={'full'}
				justifyContent={'center'}
				alignItems={'flex-start'}
				px={useBreakpointValue({ base: 4, md: 8 })}
				backgroundColor='blackAlpha.600'
			>
				<Container>
					<Stack
						maxWidth={'4xl'}
						align={['center', 'flex-start']}
						spacing={'3rem'}
					>
						<Heading
							color={'white'}
							fontWeight={700}
							lineHeight={1.2}
							fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}
						>
							We build high-quality, affordable homes in Stark County
						</Heading>
						<Stack direction={['column', 'row']} spacing={'1rem'}>
							<Link href='/contact'>
								<Button
									bg={'brand'}
									color={'white'}
									_hover={{ bg: 'brandDark' }}
								>
									Let&apos;s Discuss Your Dream Home
								</Button>
							</Link>
							<Button
								bg={'transparent'}
								color={'whiteAlpha.800'}
								_hover={{ bg: 'whiteAlpha.400' }}
							>
								About Us
							</Button>
						</Stack>
					</Stack>
				</Container>
			</VStack>
		</Flex>
	)
}
