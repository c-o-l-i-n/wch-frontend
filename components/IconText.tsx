import { Flex, Heading, Text, Stack, HStack } from '@chakra-ui/react'
import { FaPhone } from 'react-icons/fa'
import { ReactElement } from 'react'

interface FeatureProps {
	text: string
	textColor?: string
	textSize?: string
	iconBg?: string
	icon: ReactElement
}

const IconText = ({
	text,
	textColor,
	textSize,
	icon,
	iconBg,
}: FeatureProps) => {
	const size = '3rem'

	return (
		<HStack align={'center'} spacing={'1rem'} alignItems={'center'} my={'2rem'}>
			<Flex
				w={size}
				h={size}
				align={'center'}
				justify={'center'}
				rounded={'full'}
				bg={iconBg || 'brandLight'}
			>
				{icon}
			</Flex>
			<Text
				fontWeight={'bold'}
				color={textColor || 'brand'}
				fontSize={textSize || '1.75rem'}
				ml={'2rem'}
			>
				{text}
			</Text>
		</HStack>
	)
}

export default IconText
