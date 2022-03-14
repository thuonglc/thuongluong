import { Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface FullRoundButtonProps {
	children?: any
	label?: string
	href?: string
}

export default function FullRoundButton({ children, label, href = '' }: FullRoundButtonProps) {
	return (
		<Link href={href} passHref>
			<MuiLink
				href={href}
				sx={{
					display: 'inline-flex',
					alignItems: 'center',
					mx: 1,
					backgroundColor: 'background.chip',
					padding: '4px 8px',
					borderRadius: 4,
					height: '32px',
					fontSize: 'inherit',
					fontFamily: 'inherit',
					color: 'inherit',
					boxShadow:
						'0 0 transparent, 0 0 transparent, 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
					'&:hover, &.active': {
						color: 'inherit',
						boxShadow:
							'0 0 transparent, 0 0 transparent, 0 0 transparent, 0 0 transparent, 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%)',
					},
				}}
			>
				{children}
				<span>{label}</span>
			</MuiLink>
		</Link>
	)
}
