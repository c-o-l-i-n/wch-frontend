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
	return (
		<Box className={styles.resetCSS}>
			{parse(populateShortCodes(text, siteInfo), {
				// replace <a> tags with Next <Link> components
				replace: (domNode) => {
					if (domNode instanceof Element && domNode.name === 'a') {
						return (
							<Link href={domNode.attribs.href} passHref>
								<a>{domToReact(domNode.children)}</a>
							</Link>
						)
					}
				},
			})}
		</Box>
	)
}

export default CmsRichText
