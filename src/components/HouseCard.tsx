import { Box, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import House from '../types/CmsCollectionTypes/house'
import { FaBath, FaBed, FaHome, FaRuler } from 'react-icons/fa'
import Link from 'next/link'
import { theme } from '../pages/_app'

type Props = {
	house: House
}

const HouseCard = ({ house }: Props) => {
	const [shouldHave2Columns] = useMediaQuery('(min-width: 45rem)')

	let bathrooms = house.fullBathrooms.toString()

	if (house.halfBathrooms) {
		if (house.halfBathrooms === 1) {
			bathrooms += '.5'
		} else {
			bathrooms += `f, ${house.halfBathrooms}h`
		}
	}

	return (
		<Link href={'/gallery/' + house.id} passHref>
			<Box
				as={'a'}
				rounded={'xl'}
				p={'1.25rem'}
				width={'full'}
				transition={'100ms'}
				style={{ boxShadow: theme.boxShadow }}
				_hover={{ backgroundColor: 'brandLight', cursor: 'pointer' }}
			>
				<Box
					height={192}
					width={'full'}
					rounded={'lg'}
					backgroundImage={`url(${
						house.thumbnail.data.attributes.formats.small?.url ?? house.thumbnail.data.attributes.url
					})`}
					backgroundPosition={'center'}
					backgroundColor={'#ddd'}
					backgroundSize={house.thumbnail.data ? 'cover' : '4rem'}
					backgroundRepeat={'no-repeat'}
					position={'relative'}
				>
				</Box>

				<HStack
					mt={'0.75rem'}
					mb={'0.5rem'}
					fontWeight={'bold'}
					color={'brand'}
					fontSize={'1.1rem'}
					spacing={shouldHave2Columns ? '2rem' : 0}
					justifyContent={shouldHave2Columns ? 'flex-start' : 'space-between'}
				>
					<HStack>
						<FaBed />
						<Text>{house.bedrooms}</Text>
					</HStack>
					<HStack>
						<FaBath />
						<Text>{bathrooms}</Text>
					</HStack>
					<HStack>
						<FaRuler />
						<Text>
							{house.squareFeet.toLocaleString()} sf
						</Text>
					</HStack>
				</HStack>
				<Text>{house.title}</Text>
			</Box>
		</Link>
	)
}

export default HouseCard
