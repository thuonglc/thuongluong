import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import avatar from 'assets/images/avatar.png'
import Icons from 'components/ui-component/icon'
import Image from 'next/image'
import * as React from 'react'

export function HeroSection() {
	return (
		<Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
			<Container>
				<Stack
					spacing={8}
					direction={{ xs: 'column-reverse', md: 'row' }}
					alignItems="center"
					textAlign={{ xs: 'center', md: 'left' }}
				>
					<Box>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: { md: 'flex-start', xs: 'center' },
							}}
						>
							<Typography variant="h3" fontWeight="bold">
								Hello&nbsp;
							</Typography>
							<Box width={{ xs: 35, md: 50 }}>
								<Icons.Hello />
							</Box>
						</Box>
						<Typography
							variant="h3"
							sx={{
								fontWeight: 'bold',
								position: 'relative',
								'&::after': {
									content: '""',
									zIndex: -10,
									width: '100%',
									background: '#3ddab4',
									height: { xs: 10, md: 16 },
									position: 'absolute',
									bottom: 0,
									left: 0,
									borderRadius: 16,
									opacity: '60%',
								},
								'&::before': {
									content: '""',
									zIndex: -9,
									width: '60%',
									background: '#00b56970',
									height: { xs: 4, md: 8 },
									position: 'absolute',
									bottom: 0,
									right: 0,
									borderRadius: 16,
									opacity: '60%',
								},
							}}
						>
							I am Thuong <br />
							Software Developer
						</Typography>
					</Box>
					<Box
						sx={{
							minWidth: '240px',
							boxShadow: '-5px 13px',
							borderRadius: '50%',
							color: 'background.paper',
						}}
					>
						<Image src={avatar} layout="responsive" alt="avatar" priority />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
