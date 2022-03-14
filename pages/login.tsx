import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import AuthLogin from 'components/auth/auth-forms/AuthLogin'
import { MainLayout } from 'components/layout'
import React from 'react'

export default function LoginPage() {
	return (
		<Stack justifyContent="center" alignItems="center">
			<Box
				sx={{
					maxWidth: { xs: 400, lg: 475 },
					margin: { xs: 2.5, md: 3 },
					'& > *': {
						flexGrow: 1,
						flexBasis: '50%',
					},
				}}
			>
				<Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>
					<AuthLogin />
				</Box>
			</Box>
		</Stack>
	)
}

LoginPage.Layout = MainLayout
