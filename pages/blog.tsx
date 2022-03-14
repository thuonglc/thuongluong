import { Box } from '@mui/material'
import { MainLayout } from 'components/layout'
import { AllBlogs } from 'components/blog/all-blogs'
import * as React from 'react'

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
	return (
		<Box>
			<AllBlogs />
		</Box>
	)
}

BlogPage.Layout = MainLayout
