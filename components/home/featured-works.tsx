import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import BlueButton from 'components/ui-component/Button/BlueButton'
import ListWorks from 'components/work/list-works'
import { works } from 'data/data'
import { IWorkCard } from 'models/work'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export function FeaturedWorks() {
	const router = useRouter()

	const [work, setWork] = useState<IWorkCard['work']>(works)
	const getFeaturedWorks = work.slice(0, 3)

	return (
		<Box component="section" pt={{ xs: 4, md: 10 }} pb={{ xs: 7, md: 9 }}>
			<Container>
				<Typography
					variant="h4"
					sx={{
						textAlign: 'center',
						fontWeight: 'bold',
						mb: { xs: 3.5, md: 5 },
					}}
				>
					Work
				</Typography>

				<Stack direction="column" mt={{ xs: 1, md: 2 }}>
					<ListWorks work={getFeaturedWorks} />
				</Stack>
				<Box textAlign="center">
					<BlueButton
						variant="contained"
						size="large"
						onClick={() => {
							router.push('/work')
						}}
					>
						See more
					</BlueButton>
				</Box>
			</Container>
		</Box>
	)
}
