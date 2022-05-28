import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import { populateShortCodes } from '../utils/pipes'

const fixMarkdownLineBreaks = (text: string) =>
	text.replace(/\n/g, '\n\\\n').replace(/\n\\\n\n/g, '\n\\\n')

type Props = {
	text: string
	siteInfo: SiteInformation
}

const Markdown = ({ text, siteInfo }: Props) => {
	return (
		<ReactMarkdown components={ChakraUIRenderer()} skipHtml>
			{populateShortCodes(fixMarkdownLineBreaks(text), siteInfo)}
		</ReactMarkdown>
	)
}

export default Markdown
