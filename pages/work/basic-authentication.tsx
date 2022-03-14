import { Container, Link as MuiLink, List, ListItem, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { MainLayout } from 'components/layout'
import { Meta, WorkBreadcrumbs, WorkImage } from 'components/work/work-page'
import Link from 'next/link'
import * as React from 'react'

const images = [
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1647190564/thuongresper.io/work/basic-authentication/c1_exfmux.png',
		alt: 'basic-authentication1',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1647190564/thuongresper.io/work/basic-authentication/c3_zbovmw.png',
		alt: 'basic-authentication2',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1647190564/thuongresper.io/work/basic-authentication/c2_sotomc.png',
		alt: 'basic-authentication3',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1647190564/thuongresper.io/work/basic-authentication/c4_pdzhxw.png',
		alt: 'basic-authentication4',
	},
]

export default function BasicAuthentication() {
	return (
		<Box component="section" py={{ xs: 4, md: 8 }}>
			<Container>
				<WorkBreadcrumbs title="Basic authentication" year={2022} />
				<Stack direction="column">
					<Box mt={2}>
						<Typography key="3" color="text.primary">
							Basic authentication allow to register a new account with username and private salt
							and using to login one apps.
						</Typography>
						Modules:
						<ol>
							<ul>
								<li>Register an account</li>
								<li>Login to an app</li>
							</ul>
						</ol>
					</Box>
					<Box my={1}>
						<List dense>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Website</Meta>
								<Link href="https://basic-authentication.vercel.app/" passHref>
									<MuiLink underline="hover" mx={1}>
										https://basic-authentication.vercel.app/
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
									MongoDB, Express, Nextjs, Typescript
								</Typography>
							</ListItem>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Github</Meta>
								<Link href="https://github.com/thuong-resper/-uni-basic-authentication" passHref>
									<MuiLink underline="hover" mx={1}>
										https://github.com/thuong-resper/-uni-basic-authentication
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

BasicAuthentication.Layout = MainLayout
