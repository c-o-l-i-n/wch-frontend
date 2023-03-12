import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import { populateShortCodes } from '../utils/pipes'
import parse, { Element, domToReact } from 'html-react-parser'
import { Box } from '@chakra-ui/react'
import styles from '../styles/CmsRichText.module.scss'
import Link from 'next/link'

const isExternalLink = (url: string) => {
	// if server side rendering (dev environment)
	if (typeof window === 'undefined') {
		return url.startsWith('http')
	}

	const tmp = document.createElement('a')
	tmp.href = url
	return tmp.host !== window.location.host
}

type Props = {
	text: string
	siteInfo: SiteInformation
}

const CmsRichText = ({ text, siteInfo }: Props) => (
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

export default CmsRichText
