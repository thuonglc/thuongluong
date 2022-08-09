import { Box, Chip, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import { IWorkCard as WorkCardProps, Work } from 'models/work'
import Image from 'next/image'
import React from 'react'

export interface WorkItemProps {
	work: Work
}

export function WorkItem({ work }: WorkItemProps) {
	return (
		<Stack
			direction={{
				xs: 'column',
				md: 'row',
			}}
			spacing={2}
			sx={{
				p: 2,
				my: 1,
				cursor: 'pointer',
				borderRadius: 2,
				boxShadow: { xs: '0 8px 30px rgba(0, 0, 0, 0.12)', md: 'none' },
				'&:hover': {
					md: {
						transition: 'box-shadow .2s ease',
						boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
						' > div:first-of-type': { transition: 'opacity linear 100ms', opacity: 0.8 },
					},
				},
			}}
		>
			<Box
				sx={{
					w: { md: 260, sx: '100%' },
					maxWidth: { xs: '100%', md: 240 },
					minWidth: 240,
					' > span': { borderRadius: 2 },
				}}
			>
				<Image
					src={work.thumbnail}
					width="100%"
					height={70}
					layout="responsive"
					alt="work-item"
					priority
				/>
			</Box>

			<Box>
				<Typography gutterBottom variant="h6" fontWeight="bold">
					{work.title}
				</Typography>
				<Stack direction="row" spacing={2} mb={2}>
					<Chip
						label={format(new Date(work.publishedDate), 'dd/MM/yyyy')}
						size="small"
						color="primary"
					/>
					<Typography
						variant="body1"
						color="secondary.lighter"
						sx={{ textTransform: 'capitalize' }}
					>
						{work.tagList}
					</Typography>
				</Stack>
				<Typography variant="body2">{work.shortDescription}</Typography>
			</Box>
		</Stack>
	)
}

export default WorkItem
