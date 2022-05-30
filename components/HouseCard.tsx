import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import House from '../types/CmsCollectionTypes/house'
import { FaBath, FaBed, FaRuler } from 'react-icons/fa'
import Link from 'next/link'

type Props = {
	house: House
}

const HouseCard = ({ house }: Props) => {
	let bathrooms = house.wholeBathrooms.toString()

	if (house.halfBathrooms) {
		if (house.halfBathrooms === 1) {
			bathrooms += '.5'
		} else {
			bathrooms += `w, ${house.halfBathrooms}h`
		}
	}

	return (
		<Link href={'/homes/' + house.id} passHref>
			<Box
				as={'a'}
				rounded={'xl'}
				p={'1.25rem'}
				width={['full', 'min-content']}
				transition={'100ms'}
				style={{ boxShadow: '0 3px 15px #bbb' }}
				_hover={{ backgroundColor: 'brandLight', cursor: 'pointer' }}
			>
				<Box
					height={192}
					width={['full', 320]}
					rounded={'lg'}
					style={{
						backgroundImage: `url(${house.thumbnail.data.attributes.url})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}}
				/>

				<HStack
					mt={'0.75rem'}
					mb={'0.5rem'}
					fontWeight={'bold'}
					color={'brand'}
					fontSize={'1.1rem'}
					spacing={'2rem'}
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
							{house.squareFeet.toLocaleString()} ft<sup>2</sup>
						</Text>
					</HStack>
				</HStack>
				<Text>{house.briefDescription}</Text>
			</Box>
		</Link>
	)
}

export default HouseCard
