import { FaPhone } from 'react-icons/fa'
import { theme } from '../pages/_app'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import { formatPhoneNumber } from '../utils/pipes'
import IconText from './IconText'

type Props = {
	siteInfo: SiteInformation
}

const Phone = ({ siteInfo }: Props) => {
	return (
		<IconText
			icon={<FaPhone color={theme.colors.brand} size={'1.25rem'} />}
			text={formatPhoneNumber(siteInfo.phone)}
			isPhoneNumber
		/>
	)
}

export default Phone
