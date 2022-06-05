import { Box } from '@chakra-ui/react'
import CmsImageData from '../types/cmsImageData'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '../styles/Carousel.module.scss'

type Props = {
	photos: Array<CmsImageData>
	fillFrame?: boolean
}

const Carousel = ({ photos, fillFrame }: Props) => {
	if (!photos?.length) {
		return <Box mt={'2rem'}></Box>
	}

	return (
		<Swiper
			modules={[Navigation, Pagination, EffectCoverflow]}
			navigation
			pagination={{ clickable: true }}
			loop={true}
			className={styles.carousel}
		>
			{photos &&
				photos.map((photo, index) => (
					<SwiperSlide key={index}>
						<Box
							w={'full'}
							h={'full'}
							minHeight={'min-content'}
							maxHeight={'50rem'}
							backgroundColor={'gray.700'}
							backgroundImage={photo.attributes.url}
							backgroundSize={fillFrame ? 'cover' : 'contain'}
							backgroundRepeat={'no-repeat'}
							backgroundPosition={'center center'}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}

export default Carousel
