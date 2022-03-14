import { Container, Stack, Typography, Alert } from '@mui/material'
import { Box } from '@mui/system'
import { blogs } from 'data/data'
import { IBlog } from 'models/blog'
import React, { useState } from 'react'
import ListBlogs from './list-blogs'

export function AllBlogs() {
	const [blog, setBlog] = useState<IBlog['blog']>(blogs)
	return (
		<Box component="section" py={{ xs: 4, md: 8 }}>
			<Container>
				<Stack direction="row" alignItems="center">
					<Typography variant="h4" fontWeight="bold" mb={4}>
						Blog
					</Typography>
				</Stack>

				{blog?.length > 0 ? (
					<ListBlogs blog={blog} />
				) : (
					<Stack sx={{ width: '100%' }} spacing={2}>
						<Alert severity="info">Sorry! No posts yet</Alert>
					</Stack>
				)}
			</Container>
		</Box>
	)
}
