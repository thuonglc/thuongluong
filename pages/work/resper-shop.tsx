import { Container, Link as MuiLink, List, ListItem, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { MainLayout } from 'components/layout'
import { Meta, WorkBreadcrumbs, WorkImage } from 'components/work/work-page'
import Link from 'next/link'
import * as React from 'react'

const images = [
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659351629/thuongresper.io/work/respershop/des1_e1qy5m.png',
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
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659352188/thuongresper.io/work/respershop/des3_zhyqfe.png',
		alt: 'shop4',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659352188/thuongresper.io/work/respershop/des4_ehpod7.png',
		alt: 'shop5',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1659351629/thuongresper.io/work/respershop/des2_ilbmbx.png',
		alt: 'shop6',
	},
	{
		src: 'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1643204599/thuongresper.io/work/respershop/des5_z9c6bu.png',
		alt: 'shop7',
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
							This is a side project I use the main MERN stack and others tools to build. It helped
							me improve my frontend, backend, and database skills and I tried to optimize code in
							all sections.
						</Typography>
						<Typography key="3" color="text.primary">
							My reference is a popular website called thegioididong. Respershop allows users to add
							to cart, buy products, pay, and ship. In addition, I also built an admin section that
							allows admins to manage products, categories, users, discount codes, and orders.
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
								<Link href="https://github.com/thuonglc/resper-shop" passHref>
									<MuiLink underline="hover" mx={1}>
										https://github.com/thuonglc/resper-shop
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
