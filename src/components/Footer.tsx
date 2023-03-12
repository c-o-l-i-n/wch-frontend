import { Box, Stack, Image } from '@chakra-ui/react'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Container from './Container'
import CmsRichText from './CmsRichText'

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
						<CmsRichText text={siteInfo.footerLeft} siteInfo={siteInfo} />
					</Box>
					<Stack
						direction={['column', 'row']}
						spacing='1rem'
					>
						<CmsRichText text={siteInfo.footerRight} siteInfo={siteInfo} />
						{siteInfo.realEstateLogo.data ?
							(
								<Image
									src={siteInfo.realEstateLogo.data.attributes.formats.small.url ?? siteInfo.realEstateLogo.data.attributes.url}
									alt={siteInfo.realEstateLogo.data.attributes.alternativeText}
									h={['6rem', '100%']}
								/>
							)
							: <></>
						}
						{siteInfo.headshot.data ?
							(
								<Image
									src={siteInfo.headshot.data.attributes.formats.small.url ?? siteInfo.headshot.data.attributes.url}
									alt={siteInfo.headshot.data.attributes.alternativeText}
									h={['6rem', '100%']}
								/>
							)
							: <></>
						}
						<Image
							src='/images/equal-housing.svg'
							alt='Equal Housing Opportunity'
							h='3rem'
						/>
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}

export default Footer
