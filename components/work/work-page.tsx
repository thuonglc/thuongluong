import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box, Breadcrumbs, Chip, Link as MuiLink, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

interface WorkBreadcrumbs {
	title: string
	year?: number | string
}

interface Image {
	src: string
	alt: string
}

export const WorkBreadcrumbs = ({ title, year }: WorkBreadcrumbs) => (
	<Box display="flex" alignItems="center">
		<Breadcrumbs
			separator={<NavigateNextIcon fontSize="small" color="primary" />}
			aria-label="breadcrumb"
		>
			<Link href="/work" passHref>
				<MuiLink underline="hover">Work</MuiLink>
			</Link>
			<Typography component="h3" variant="body1" color="text.primary" mr={1}>
				{title}
			</Typography>
		</Breadcrumbs>
		<Chip label={year} size="small" color="primary" />
	</Box>
)

export const WorkImage = ({ src, alt }: Image) => (
	<Box
		sx={{
			my: 1,
			'>span': {
				borderRadius: 2,
			},
		}}
	>
		<Image src={src} alt={alt} width={820} height={460} layout="responsive" priority />
	</Box>
)

export const Meta = ({ children }: any) => <Chip color="primary" size="small" label={children} />
