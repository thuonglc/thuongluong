import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'

export interface PostCardProps {}

export function PostCard(props: PostCardProps) {
	return (
		<Card sx={{ backgroundColor: 'background.default' }}>
			<CardContent>
				<Typography gutterBottom variant="h6" fontWeight="bold">
					Making a design system from scratch
				</Typography>
				<Box sx={{ display: 'flex', mb: 1 }}>
					<Typography
						variant="body1"
						sx={{
							minWidth: 130,
							position: 'relative',
							'&:after': {
								content: '""',
								position: 'absolute',
								height: '15px',
								width: '1px',
								bgcolor: 'text.primary',
								right: 0,
								top: '50%',
								transform: 'translateY(-50%)',
							},
						}}
					>
						12 Feb 2021
					</Typography>
					<Typography variant="body1" pl={3}>
						12 Feb 2021
					</Typography>
				</Box>

				<Typography variant="body2">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
					suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
					dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
			</CardContent>
		</Card>
	)
}
