import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import BlueButton from 'components/ui-component/Button/BlueButton'
import FullRoundButton from 'components/ui-component/Button/FullRoundButton'
import Icons from 'components/ui-component/icon'
import * as React from 'react'

export function AboutSection() {
	return (
		<Box component="section" pt={{ xs: 4, md: 10 }} pb={{ xs: 7, md: 9 }}>
			<Container>
				<Typography
					variant="h4"
					sx={{
						textAlign: { xs: 'center', md: 'left' },
						fontWeight: 'bold',
						mb: { xs: 3.5, md: 5 },
					}}
				>
					About me
				</Typography>
				<Stack
					spacing={2}
					direction={{ xs: 'column', md: 'row' }}
					alignItems={{ xs: 'center', md: 'flex-start' }}
					textAlign={{ xs: 'center', md: 'left' }}
					justifyContent="space-between"
				>
					<Box maxWidth={550}>
						<Typography sx={{ mb: { xs: 3.5, md: 5 }, lineHeight: 2 }}>
							I am currently working as a <strong>software developer</strong> based in HCMC. I enjoy
							building web apps using
							<FullRoundButton href="https://mui.com/" label="MUI">
								<Icons.MUI />
							</FullRoundButton>
							and
							<FullRoundButton href="https://reactjs.org/" label="React">
								<Icons.ReactIcon />
							</FullRoundButton>
							. I am perfect for implementing well-thought-out products to solve real-life problems
							with code.
						</Typography>
					</Box>
					<BlueButton variant="contained" size="large">
						Download Resume
					</BlueButton>
				</Stack>
			</Container>
		</Box>
	)
}
