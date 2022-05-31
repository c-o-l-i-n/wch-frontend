import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	useColorModeValue,
	useDisclosure,
	HStack,
	Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Container from './Container'
import Link from 'next/link'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'

type Props = {
	siteInfo: SiteInformation
}
const Navbar = ({ siteInfo }: Props) => {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Box backgroundColor='white'>
			<Container>
				<Flex w={'100%'} h='5rem' alignItems='center'>
					{/* Logo & Navigation Links */}
					<Flex h='100%' flex={1} justifyContent='start' alignItems='center'>
						<Link href='/' passHref>
							<Flex
								as={'a'}
								h='100%'
								alignItems='center'
								px='1rem'
								_hover={{
									textDecoration: 'none',
									backgroundColor: 'blackAlpha.100',
									cursor: 'pointer',
								}}
							>
								<Image
									src={siteInfo.logo.data.attributes.url}
									alt={siteInfo.logo.data.attributes.alternativeText}
									h='50%'
								></Image>
							</Flex>
						</Link>

						<Flex display={['none', 'flex']} ml='auto' h='100%'>
							<DesktopNav />
						</Flex>
					</Flex>

					{/* Hamburger Menu */}
					<Flex display={['flex', 'none']}>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ? (
									<CloseIcon w={3} h={3} />
								) : (
									<HamburgerIcon w={5} h={5} />
								)
							}
							variant='ghost'
							aria-label='Toggle Navigation'
						/>
					</Flex>
				</Flex>

				<Collapse in={isOpen} animateOpacity>
					<MobileNav />
				</Collapse>
			</Container>
		</Box>
	)
}

const DesktopNav = () => {
	return (
		<HStack spacing={0}>
			{NAV_ITEMS.map((navItem) => (
				<Link key={navItem.label} href={navItem.href ?? '#'} passHref>
					<Flex
						as={'a'}
						h='100%'
						alignItems='center'
						px='1rem'
						_hover={{
							textDecoration: 'none',
							backgroundColor: 'blackAlpha.100',
							cursor: 'pointer',
						}}
					>
						<Flex h='100%' alignItems='center'>
							{navItem.label}
						</Flex>
					</Flex>
				</Link>
			))}
		</HStack>
	)
}

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue('white', 'blackAlpha.800')}
			p={4}
			display={{ md: 'none' }}
		>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	)
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { onToggle } = useDisclosure()

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Link key={label} href={href ?? '#'} passHref>
				<Flex
					as={'a'}
					py={2}
					justify='space-between'
					align='center'
					_hover={{
						textDecoration: 'none',
						cursor: 'pointer',
					}}
				>
					<Text fontWeight={600}>{label}</Text>
				</Flex>
			</Link>
		</Stack>
	)
}

interface NavItem {
	label: string
	subLabel?: string
	children?: Array<NavItem>
	href?: string
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'About Us',
		href: '/about',
	},
	{
		label: 'Our Homes',
		href: '/our-homes',
	},
	{
		label: 'Standard Features',
		href: '/features',
	},
	{
		label: 'Testimonials',
		href: '/testimonials',
	},
	{
		label: 'Contact Us',
		href: '/contact',
	},
]

export default Navbar
