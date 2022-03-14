import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { works } from 'data/data'
import { IWorkCard } from 'models/work'
import React, { useState } from 'react'
import ListWorks from './list-works'

export function AllWorks() {
	const [work, setWork] = useState<IWorkCard['work']>(works)
	return (
		<Box component="section" py={{ xs: 4, md: 8 }}>
			<Container>
				<Stack direction="row" alignItems="center">
					<Typography variant="h4" fontWeight="bold" mb={4} pl={{ xs: 0, md: 2 }}>
						Work
					</Typography>
				</Stack>

				<Stack direction="row">
					<Box>
						<ListWorks work={work} />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
