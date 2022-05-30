import {
	Stack,
	Flex,
	Button,
	Heading,
	VStack,
	useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import Container from './Container'
import HomePage from '../types/CmsSingleTypes/homePage'

const Hero = ({
	heroImage,
	heroText,
	primaryCallToActionButtonText,
	primaryCallToActionButtonLink,
	secondaryCallToActionButtonText,
	secondaryCallToActionButtonLink,
}: HomePage) => {
	return (
		<Flex
			w={'full'}
			h={'70vh'}
			minHeight={'min-content'}
			maxHeight={'50rem'}
			backgroundImage={heroImage.data.attributes.url}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
		>
			<VStack
				w={'full'}
				justifyContent={'center'}
				alignItems={'flex-start'}
				px={[4, 8]}
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
							{heroText}
						</Heading>
						<Stack direction={['column', 'row']} spacing={'1rem'}>
							<Link href={primaryCallToActionButtonLink} passHref>
								<Button
									as={'a'}
									bg={'brand'}
									color={'white'}
									_hover={{ bg: 'brandDark' }}
								>
									{primaryCallToActionButtonText}
								</Button>
							</Link>
							<Link href={secondaryCallToActionButtonLink} passHref>
								<Button
									as={'a'}
									bg={'transparent'}
									color={'whiteAlpha.800'}
									_hover={{ bg: 'whiteAlpha.400' }}
								>
									{secondaryCallToActionButtonText}
								</Button>
							</Link>
						</Stack>
					</Stack>
				</Container>
			</VStack>
		</Flex>
	)
}

export default Hero
