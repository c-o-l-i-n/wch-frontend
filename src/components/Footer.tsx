import { Box, Stack, Image, HStack } from '@chakra-ui/react'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import Container from './Container'
import CmsRichText from './CmsRichText'
import Link from 'next/link'
import CmsMedia from '../types/cmsMedia'
import { ReactElement } from 'react'

const footerImage = (image: CmsMedia): ReactElement => (
	<Image
		src={image.data.attributes.formats.small?.url ?? image.data.attributes.url}
		alt={image.data.attributes.alternativeText}
		display={'block'}
		height={'100%'}
		width={'auto'}
		margin={'auto'}
		borderRadius={'0.5rem'}
	/>
)

interface Props {
	siteInfo: SiteInformation
}

const Footer = ({ siteInfo }: Props): ReactElement => {
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
										{siteInfo.realEstateWebsite ?
											<Link href={siteInfo.realEstateWebsite ?? ''} passHref target={'_blank'}>

												{footerImage(siteInfo.headshot)}

											</Link>
											: footerImage(siteInfo.headshot)
										}
									</Box>
								)
								: <></>
							}
							{siteInfo.realEstateLogo.data ?
								(
									<Box h={'8rem'}>
										{siteInfo.realEstateWebsite ?
											<Link href={siteInfo.realEstateWebsite ?? ''} passHref target={'_blank'}>

												{footerImage(siteInfo.realEstateLogo)}

											</Link>
											: footerImage(siteInfo.realEstateLogo)
										}
									</Box>
								)
								: <></>
							}
						</HStack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}

export default Footer
