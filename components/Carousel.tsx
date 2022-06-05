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
	shouldFill?: boolean
}

const Carousel = ({ photos, shouldFill }: Props) => {
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
							backgroundImage={photo.attributes.url}
							backgroundSize={shouldFill ? 'cover' : 'contain'}
							backgroundRepeat={'no-repeat'}
							backgroundPosition={'center center'}
						/>
					</SwiperSlide>
				))}
		</Swiper>
	)
}

export default Carousel
