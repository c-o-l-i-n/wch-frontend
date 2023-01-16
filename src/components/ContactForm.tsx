import {
	Heading,
	Box,
	Button,
	VStack,
	Text,
	Input,
	Textarea,
} from '@chakra-ui/react'
import { useForm, ValidationError } from '@formspree/react'
import { ReactNode } from 'react'
import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import PhoneNumberInput from './PhoneNumberInput'

type Props = {
	siteInfo: SiteInformation
	formHeading?: string
	shouldHaveNegativeTopMargin?: boolean
}

const ContactForm = ({
	siteInfo,
	formHeading,
	shouldHaveNegativeTopMargin,
}: Props) => {
	const [state, handleSubmit] = useForm(siteInfo.formspreeContactFormId)

	const emailRegex =
		'(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])'

	const errorTextColor = '#dd0000'

	const box = (children: ReactNode) => (
		<Box
			w={'full'}
			backgroundColor={'white'}
			boxShadow={'2xl'}
			rounded={'md'}
			mt={shouldHaveNegativeTopMargin ? ['-3rem', '-6rem'] : undefined}
		>
			<Box p={['2rem', '3rem']}>{children}</Box>
		</Box>
	)

	// if (state.succeeded) {
	if (state.succeeded) {
		return box(
			<VStack spacing={'1rem'} py={'11.25rem'}>
				<Heading fontSize={'1.5rem'} textAlign={'center'} fontWeight={'bold'}>
					Thank you for your message!
				</Heading>
				<Text>We will get back to you soon.</Text>
			</VStack>
		)
	}

	return box(
		<form onSubmit={handleSubmit}>
			<VStack spacing={'1rem'}>
				{formHeading && (
					<Heading fontSize={'1.5rem'} textAlign={'center'} fontWeight={'bold'}>
						{formHeading}
					</Heading>
				)}

				<Input
					type='text'
					name='name'
					placeholder='Name'
					disabled={state.submitting}
					required
				/>
				<ValidationError
					field='name'
					errors={state.errors}
					style={{ color: errorTextColor }}
				></ValidationError>

				<Input
					type='email'
					name='email'
					placeholder='Email'
					pattern={emailRegex}
					disabled={state.submitting}
					required
				/>
				<ValidationError
					field='email'
					errors={state.errors}
					style={{ color: errorTextColor }}
				></ValidationError>

				<PhoneNumberInput
					name='phone'
					placeholder='Phone Number'
					disabled={state.submitting}
					required
				/>
				<ValidationError
					field='phone'
					errors={state.errors}
					style={{ color: errorTextColor }}
				></ValidationError>

				<Textarea
					name='message'
					placeholder='Message'
					minHeight={'10rem'}
					disabled={state.submitting}
					required
				/>
				<ValidationError
					field='message'
					errors={state.errors}
					style={{ color: errorTextColor }}
				></ValidationError>

				<Button
					type='submit'
					w={'full'}
					mt={8}
					backgroundColor={'brand'}
					color={'white'}
					rounded={'md'}
					_hover={{ bg: 'brandDark' }}
				>
					{state.submitting ? 'Sending...' : 'Send'}
				</Button>
			</VStack>
		</form>
	)
}

export default ContactForm
