import { Box } from '@chakra-ui/react'
import CmsMediaData from '../types/cmsMediaData'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '../styles/Carousel.module.scss'

type Props = {
	photos: Array<CmsMediaData>
}

const Carousel = ({ photos }: Props) => {
	if (!photos?.length) {
		return <Box mt={'2rem'}></Box>
	}

	const photoShouldFillFrame = (photo: CmsMediaData) => {
		const isLandscape = photo.attributes.width > photo.attributes.height
		const aspectRatio = photo.attributes.width / photo.attributes.height
		const threshold = 16 / 9 + 0.01 // 16x9 aspect ratio plus 0.01 epsilon

		return isLandscape && aspectRatio < threshold
	}

	return (
		<Swiper
			modules={[Navigation, Pagination, EffectCoverflow]}
			navigation
			pagination={{ clickable: true }}
			className={styles.carousel}
		>
			{photos &&
				photos.map((photo, index) => (
					<SwiperSlide key={index}>
						<Box
							w={'full'}
							h={'full'}
							backgroundColor={'gray.700'}
							backgroundImage={photo.attributes.formats.large?.url ?? photo.attributes.url}
							backgroundSize={photoShouldFillFrame(photo) ? 'cover' : 'contain'}
							backgroundRepeat={'no-repeat'}
							backgroundPosition={'center center'}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}

export default Carousel
