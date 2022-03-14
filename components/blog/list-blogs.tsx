import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { IBlog as BlogProps } from 'models/blog'
import React from 'react'
import Link from 'next/link'

interface IProps {
	blog: BlogProps['blog']
}

const ListBlogs: React.FC<IProps> = ({ blog }) => {
	const renderList = (): JSX.Element[] => {
		return blog.map((blog, index) => {
			return (
				<Link
					key={index}
					passHref
					href={`/blog/${blog?.title
						.toLowerCase()
						.replace(/ /g, '-')
						.replace(/[^\w-]+/g, '')}`}
				>
					<a>
						<Stack
							direction="column"
							sx={{
								py: 2,
								px: 2,
								my: 1,
								cursor: 'pointer',
								border: '1px solid',
								borderColor: 'background.border',
								borderRadius: 2,
								'&:hover': {
									transition: 'box-shadow .2s ease',
									boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
								},
							}}
						>
							<Typography gutterBottom variant="h6" fontWeight="bold">
								{blog.title}
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
									{blog.date}
								</Typography>
								<Typography variant="body1" pl={3}>
									{blog.field}
								</Typography>
							</Box>

							<Typography variant="body2">{blog.description}</Typography>
						</Stack>
					</a>
				</Link>
			)
		})
	}

	return <Box>{renderList()}</Box>
}

export default ListBlogs
