import { FaEnvelope } from 'react-icons/fa'
import { theme } from '../pages/_app'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import IconText from './IconText'

type Props = {
	siteInfo: SiteInformation
}

const Email = ({ siteInfo }: Props) => {
	return (
		<IconText
			icon={<FaEnvelope color={theme.colors.brand} size={'1.25rem'} />}
			text={'siteInfo.email'}
			textSize={['1rem', '1.5rem']}
			isEmail
		/>
	)
}

export default Email
