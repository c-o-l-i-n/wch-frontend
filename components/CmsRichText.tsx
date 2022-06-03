import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import { populateShortCodes } from '../utils/pipes'
import parse from 'html-react-parser'
import { Box } from '@chakra-ui/react'
import styles from '../styles/CmsRichText.module.scss'

type Props = {
	text: string
	siteInfo: SiteInformation
}

const CmsRichText = ({ text, siteInfo }: Props) => {
	return (
		<Box className={styles.resetCSS}>
			{parse(populateShortCodes(text, siteInfo))}
		</Box>
	)
}

export default CmsRichText
