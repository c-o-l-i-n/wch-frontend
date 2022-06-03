import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import { populateShortCodes } from '../utils/pipes'
import parse, { Element, domToReact } from 'html-react-parser'
import { Box } from '@chakra-ui/react'
import styles from '../styles/CmsRichText.module.scss'
import Link from 'next/link'

type Props = {
	text: string
	siteInfo: SiteInformation
}

const CmsRichText = ({ text, siteInfo }: Props) => {
	const isExternalLink = (url: string) => {
		if (!process.browser) {
			return url.startsWith('http')
		}

		const tmp = document.createElement('a')
		tmp.href = url
		return tmp.host !== window.location.host
	}

	return (
		<Box className={styles.resetCSS}>
			{parse(populateShortCodes(text, siteInfo), {
				// replace <a> tags with Next <Link> components
				replace: (domNode) => {
					if (domNode instanceof Element && domNode.name === 'a') {
						const url = domNode.attribs.href
						return (
							<Link href={url} passHref>
								<a target={isExternalLink(url) ? '_blank' : undefined}>
									{domToReact(domNode.children)}
								</a>
							</Link>
						)
					}
				},
			})}
		</Box>
	)
}

export default CmsRichText
