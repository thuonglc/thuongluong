import Cookies from 'js-cookie'
import { User } from 'models'
import useSWR from 'swr'

export function useAuth() {
	const accessTokenExists = Boolean(Cookies.get('access_token'))

	const {
		data: profile,
		error,
		mutate,
	} = useSWR<User>(accessTokenExists ? '/api/user/profile' : null)
	const firstLoading = !profile === undefined && !error === undefined

	const logout = error && error.status === 400

	return {
		profile,
		error,
		logout,
		mutate,
		firstLoading,
	}
}
