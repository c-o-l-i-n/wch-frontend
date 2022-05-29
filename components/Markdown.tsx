import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import { populateShortCodes } from '../utils/pipes'

type Props = {
	text: string
	siteInfo: SiteInformation
}

const Markdown = ({ text, siteInfo }: Props) => {
	return (
		<ReactMarkdown components={ChakraUIRenderer()} skipHtml>
			{populateShortCodes(text, siteInfo)}
		</ReactMarkdown>
	)
}

export default Markdown
