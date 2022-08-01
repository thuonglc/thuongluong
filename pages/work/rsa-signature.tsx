import { Container, Link as MuiLink, List, ListItem, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { MainLayout } from 'components/layout'
import { Meta, WorkBreadcrumbs, WorkImage } from 'components/work/work-page'
import Link from 'next/link'
import * as React from 'react'

const images = [
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659354604/thuongresper.io/work/rsa/rsa_pnnfp4.png',
		alt: 'rsa',
	},
]

export default function RsaSignature() {
	return (
		<Box component="section" py={{ xs: 4, md: 8 }}>
			<Container>
				<WorkBreadcrumbs title="RSA signature" year={2022} />
				<Stack direction="column">
					<Box mt={2}>
						<Typography key="3" color="text.primary">
							RSA signature is a web app allows to sign and authenticate a number txt file that
							based on Euclid algorithm for GCD.
						</Typography>
						Modules:
						<ol>
							<ul>
								<li>Upload/download a file</li>
								<li>Read/change file content</li>
								<li>Signed document based on Euclid algorithm</li>
							</ul>
						</ol>
					</Box>
					<Box my={1}>
						<List dense>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Website</Meta>
								<Link href="https://rsa-signature.vercel.app/" passHref>
									<MuiLink underline="hover" mx={1}>
										https://rsa-signature.vercel.app/
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
									Nextjs, Typescript
								</Typography>
							</ListItem>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Github</Meta>
								<Link href="https://github.com/thuonglc/rsa-signature" passHref>
									<MuiLink underline="hover" mx={1}>
										https://github.com/thuonglc/rsa-signature
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

RsaSignature.Layout = MainLayout
