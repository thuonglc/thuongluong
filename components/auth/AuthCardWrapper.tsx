import { Box, Card } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {}
export interface AuthCardProps {
	children: ReactNode
}

export const AuthCardWrapper = ({ children }: AuthCardProps) => (
	<Card
		sx={{
			maxWidth: { xs: 400, lg: 475 },
			margin: { xs: 2.5, md: 3 },
			'& > *': {
				flexGrow: 1,
				flexBasis: '50%',
			},
		}}
	>
		<Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{children}</Box>
	</Card>
)
