import { Box } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Head from 'next/head'
import React from 'react'
import CmsImageData from '../types/cmsImageData'

type Props = {
	photos: Array<CmsImageData>
	shouldFill?: boolean
}

const Carousel = ({ photos, shouldFill }: Props) => {
	return (
		<>
			<Head>
				<style>
					{`.carousel {
							margin: 0.5rem 0 2rem 0;
							border-radius: 0.75rem;
							overflow: clip;
							background: #444444;
						}`}
				</style>
			</Head>
			<Splide
				options={{
					type: 'loop',
					heightRatio: 9 / 16,
				}}
				className={'carousel'}
			>
				{photos &&
					photos.map((photo, index) => (
						<SplideSlide key={index}>
							<Box
								w={'full'}
								h={'full'}
								minHeight={'min-content'}
								maxHeight={'50rem'}
								backgroundImage={photo.attributes.url}
								backgroundSize={shouldFill ? 'cover' : 'contain'}
								backgroundRepeat={'no-repeat'}
								backgroundPosition={'center center'}
							/>
						</SplideSlide>
					))}
			</Splide>
		</>
	)
}

export default Carousel
