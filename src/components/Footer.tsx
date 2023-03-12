import { Box, Stack, Image, HStack } from '@chakra-ui/react'
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
					<Box textAlign={['center', 'unset']}>
						<CmsRichText text={siteInfo.footerLeft} siteInfo={siteInfo} />
					</Box>
					<Stack
						direction={['column', 'row']}
						spacing='2rem'
						textAlign={['center', 'unset']}
					>
						<CmsRichText text={siteInfo.footerRight} siteInfo={siteInfo} />
						<HStack
							justify={['center', 'unset']}
							spacing={'2rem'}
						>
							{siteInfo.headshot.data ?
								(
									<Box h={'8rem'}>
										<Image
											src={siteInfo.headshot.data.attributes.formats.small?.url ?? siteInfo.headshot.data.attributes.url}
											alt={siteInfo.headshot.data.attributes.alternativeText}
											display={'block'}
											height={'100%'}
											width={'auto'}
											margin={'auto'}
											borderRadius={'0.5rem'}
										/>
										</Box>
								)
								: <></>
							}
							{siteInfo.realEstateLogo.data ?
								(
									<Box h={'8rem'}>
										<Image
											src={siteInfo.realEstateLogo.data.attributes.formats.small?.url ?? siteInfo.realEstateLogo.data.attributes.url}
											alt={siteInfo.realEstateLogo.data.attributes.alternativeText}
											display={'block'}
											height={'100%'}
											width={'auto'}
											margin={'auto'}
											borderRadius={'0.5rem'}
										/>
									</Box>
								)
								: <></>
							}
						</HStack>
						{/* <Image
							src='/images/equal-housing.svg'
							alt='Equal Housing Opportunity'
							h='3rem'
						/> */}
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}

export default Footer
