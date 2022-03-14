import { Container, Link as MuiLink, List, ListItem, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { MainLayout } from 'components/layout'
import { Meta, WorkBreadcrumbs, WorkImage } from 'components/work/work-page'
import Link from 'next/link'
import * as React from 'react'

const images = [
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1643204598/thuongresper.io/work/respershop/des1_spxjk0.png',
		alt: 'shop1',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1643204598/thuongresper.io/work/respershop/des3_mogn0f.png',
		alt: 'shop2',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1643204602/thuongresper.io/work/respershop/des9_hco3ro.png',
		alt: 'shop3',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1643204599/thuongresper.io/work/respershop/des2_morcsc.png',
		alt: 'shop4',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1643204597/thuongresper.io/work/respershop/des10_xlwgbt.png',
		alt: 'shop5',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1643204599/thuongresper.io/work/respershop/des5_z9c6bu.png',
		alt: 'shop6',
	},
]

export default function ResperShop() {
	return (
		<Box component="section" py={{ xs: 4, md: 8 }}>
			<Container>
				<WorkBreadcrumbs title="ResperShop" year={2021} />
				<Stack direction="column">
					<Box mt={2}>
						<Typography key="3" color="text.primary">
							Respershop is a basic e-commerce site. Allows purchase of technology products such as
							phones, laptops, ipads, watches... The website includes admin and user sections in the
							Vietnamese language. The current website just stops at research and learning. This is
							a personal graduation project and scored 9 points.
						</Typography>
						Modules:
						<ol>
							<ul>
								<li>Cart and checkout</li>
								<li>User management</li>
								<li>Product information management</li>
								<li>Order management</li>
								<li>Pricing and promotions engines</li>
								<li>Content management</li>
							</ul>
						</ol>
					</Box>
					<Box my={1}>
						<List dense>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Website</Meta>
								<Link href="https://respershop.netlify.app/" passHref>
									<MuiLink underline="hover" mx={1}>
										https://respershop.netlify.app/
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
									MongoDB, Express, React, Redux Toolkit, Nodejs
								</Typography>
							</ListItem>
							<ListItem alignItems="flex-start" disableGutters>
								<Meta>Github</Meta>
								<Link href="https://github.com/thuong-resper/resper-shop" passHref>
									<MuiLink underline="hover" mx={1}>
										https://github.com/thuong-resper/resper-shop
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
