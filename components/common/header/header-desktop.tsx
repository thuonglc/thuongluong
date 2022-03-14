import { Container, Link as MuiLink, Stack } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ButtonChangeMode } from 'pages/_app'
import * as React from 'react'
import Logo from './logo'
import { ROUTE_LIST } from './route'

export function HeaderDesktop() {
	const router = useRouter()

	return (
		<Box
			sx={{
				display: { xs: 'none', md: 'block' },
				py: 2,
				position: 'sticky',
				top: 0,
				width: '100%',
				zIndex: 'modal',
				backgroundColor: 'background.default',
			}}
		>
			<Container>
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Stack>
						<Logo />
					</Stack>
					<Stack direction="row" justifyContent="flex-end" alignItems="center">
						{ROUTE_LIST.map((route) => (
							<Link key={route.path} href={route.path} passHref>
								<MuiLink
									sx={{ ml: 2, fontWeight: 'medium' }}
									color={router.pathname === route.path ? 'primary' : 'text.primary'}
								>
									{route.label}
								</MuiLink>
							</Link>
						))}
						<ButtonChangeMode />
					</Stack>
				</Stack>
			</Container>
		</Box>
	)
}
