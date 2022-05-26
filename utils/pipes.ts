export const formatPhoneNumber = (phoneNumber: string) =>
	`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(
		6
	)}`
