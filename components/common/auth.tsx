import { Backdrop, CircularProgress } from '@mui/material'
import { useAuth } from 'hooks/use-auth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export interface AuthProps {
	children: any
}

export function Auth({ children }: AuthProps) {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (!firstLoading && !profile) router.push('/login')
	}, [router, profile, firstLoading])

	if (!profile)
		return (
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		)

	return <div>{children}</div>
}
