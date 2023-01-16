import { useState } from 'react'
import { Input } from '@chakra-ui/react'

type Props = {
	name: string
	placeholder: string
	disabled: boolean
	required?: boolean
}

const PhoneNumberInput = ({ name, placeholder, disabled, required }: Props) => {
	const [inputValue, setInputValue] = useState('')

	const formatPhoneNumber = (value: string) => {
		if (!value) {
			return value
		}

		const phoneNumber = value.replace(/[^\d]/g, '')

		if (phoneNumber.length < 4) {
			return phoneNumber
		}

		if (phoneNumber.length < 7) {
			return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
		}

		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
			3,
			6
		)}-${phoneNumber.slice(6, 10)}`
	}

	return (
		<>
			<Input
				type='tel'
				name={name}
				placeholder={placeholder}
				onChange={(e) => setInputValue(formatPhoneNumber(e.target.value))}
				value={inputValue}
				disabled={disabled}
				required={required}
				pattern={'^\\(\\d{3}\\) \\d{3}-\\d{4}$'}
			/>
		</>
	)
}

export default PhoneNumberInput
