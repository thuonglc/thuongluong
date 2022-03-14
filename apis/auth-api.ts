import { GoogleLoginPayload, LoginPayload } from 'models'
import axiosClient from './axios-client'

export const authApi = {
	login(payload: LoginPayload) {
		return axiosClient.post('/api/user/login', payload)
	},

	loginGoogle(payload: GoogleLoginPayload) {
		return axiosClient.post('/api/user/google-login', payload)
	},

	logout() {
		return axiosClient.post('/api/user/logout')
	},

	getProfile() {
		return axiosClient.get('/api/user/profile')
	},
}
