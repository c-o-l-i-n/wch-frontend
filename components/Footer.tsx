import { Box, Stack, Image } from '@chakra-ui/react'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Container from './Container'
import Markdown from './Markdown'

type Props = {
	siteInfo: SiteInformation
}
const Footer = ({ siteInfo }: Props) => {
	return (
		<Box backgroundColor='gray.700' color='white' py={'3rem'}>
			<Container>
				<Stack
					direction={['column', 'row']}
					justifyContent='space-between'
					spacing='2rem'
				>
					<Box textAlign={['center', 'left']}>
						<Markdown text={siteInfo.footer} siteInfo={siteInfo} />
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
