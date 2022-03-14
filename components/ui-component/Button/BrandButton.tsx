import { Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface BrandButtonProps {
	children?: any
	href?: string
}

export default function BrandButton({ children, href = '' }: BrandButtonProps) {
	return (
		<Link href={href} passHref>
			<MuiLink
				href={href}
				sx={{
					margin: 2,
					position: 'relative',
					transition: 'all .2s ease-in-out',
					'&:hover': {
						transform: 'scale(1.25)',
					},
				}}
			>
				{children}
			</MuiLink>
		</Link>
	)
}
