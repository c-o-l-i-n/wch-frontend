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
import HomePageType from '../types/CmsSingleTypes/homePage'

const Hero = ({
	heroImage,
	heroText,
	primaryCallToActionButtonText,
	primaryCallToActionButtonLink,
	secondaryCallToActionButtonText,
	secondaryCallToActionButtonLink,
}: HomePageType) => {
	return (
		<Flex
			w={'full'}
			h={'70vh'}
			minHeight={'31rem'}
			maxHeight={'50rem'}
			backgroundImage={encodeURI(heroImage.data.attributes.url)}
			backgroundSize={'cover'}
			backgroundPosition={'center'}
		>
			<VStack
				w={'full'}
				justifyContent={'center'}
				alignItems={'flex-start'}
				px={[4, 8]}
				pb={[6, 0]}
				backgroundColor='blackAlpha.700'
			>
				<Container>
					<Stack
						maxWidth={'4xl'}
						align={['center', 'flex-start']}
						spacing={['2.5rem', '3rem']}
					>
						<Heading
							color={'white'}
							fontWeight={700}
							lineHeight={1.2}
							fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}
						>
							{heroText}
						</Heading>
						<Stack direction={['column', 'row']} spacing={['0.5rem', '1rem']}>
							<Link href={primaryCallToActionButtonLink} passHref legacyBehavior>
								<Button
									as={'a'}
									bg={'brand'}
									color={'white'}
									_hover={{ bg: 'brandDark' }}
								>
									{primaryCallToActionButtonText}
								</Button>
							</Link>
							{secondaryCallToActionButtonText && (
								<Link href={secondaryCallToActionButtonLink} passHref legacyBehavior>
									<Button
										as={'a'}
										bg={'transparent'}
										color={'whiteAlpha.800'}
										_hover={{ bg: 'whiteAlpha.400' }}
									>
										{secondaryCallToActionButtonText}
									</Button>
								</Link>
							)}
						</Stack>
					</Stack>
				</Container>
			</VStack>
		</Flex>
	)
}

export default Hero
