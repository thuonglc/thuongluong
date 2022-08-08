import { Container, Link as MuiLink, List, ListItem, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { MainLayout } from 'components/layout'
import { Meta, WorkBreadcrumbs, WorkImage } from 'components/work/work-page'
import Link from 'next/link'
import * as React from 'react'

const images = [
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659988590/thuongresper.io/work/music_ihonwx.png',
		alt: 'music1',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659988589/thuongresper.io/work/music4_i9ylfw.png',
		alt: 'music2',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659988590/thuongresper.io/work/music1_kfx1yh.png',
		alt: 'music3',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659988590/thuongresper.io/work/music3_jn1toa.png',
		alt: 'music4',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659988590/thuongresper.io/work/music2_vfujc9.png',
		alt: 'music5',
	},
]

export default function ResperMusic() {
	return (
		<Box component="section" py={{ xs: 4, md: 8 }}>
			<Container>
				<WorkBreadcrumbs title="ResperShop" year={2022} />
				<Stack direction="column">
					<Box mt={2}>
						<Typography key="3" color="text.primary">
							This is an online music website referenced from Spotify. It is built based on Nextjs
							and PostgreSQL which allows users to listen to music, change songs, and shuffle.
						</Typography>
						Modules:
						<ol>
							<ul>
								<li>Play music</li>
								<li>Change songs</li>
								<li>Songs shuffle</li>
								<li>Register an account</li>
								<li>Login to an app</li>
							</ul>
						</ol>
					</Box>
					<Box my={1}>
						<List dense>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Website</Meta>
								<Link href="https://respermusic.vercel.app/" passHref>
									<MuiLink underline="hover" mx={1}>
										https://respermusic.vercel.app/
									</MuiLink>
								</Link>
							</ListItem>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Platform</Meta>
								<Typography key="3" color="text.primary" ml={1}>
									Web
								</Typography>
							</ListItem>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Stack</Meta>
								<Typography key="3" color="text.primary" ml={1}>
									Nextjs, Chakra UI, SWR, TypeScript, PostgreSQL
								</Typography>
							</ListItem>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Github</Meta>
								<Link href="https://github.com/thuonglc/respermusic" passHref>
									<MuiLink underline="hover" mx={1}>
										https://github.com/thuonglc/respermusic
									</MuiLink>
								</Link>
							</ListItem>
						</List>
					</Box>
					<Box>
						{images.map((img) => (
							<WorkImage key={img.alt} src={img.src} alt={img.alt} />
						))}
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}

ResperShop.Layout = MainLayout
