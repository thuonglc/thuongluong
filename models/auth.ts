export interface LoginPayload {
	email: string
	password: string
}

export interface User {
	_id: string
	name: string
	email: string
	password: string
	role: number | string
	avatar?: string
	createdAt?: string
	cart?: {}[]
	address?: string
	paymentMethod?: string
	wishlist?: {}[]
	updatedAt?: string
	__v?: number | string
}

export interface LoginResponse {
	accessToken: string
	refreshToken: string
	user: User
}

export interface GoogleLoginPayload {
	tokenId: string
}
