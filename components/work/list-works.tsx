import { Box, Chip, Stack, Typography } from '@mui/material'
import { IWorkCard as WorkCardProps } from 'models/work'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProps {
	work: WorkCardProps['work']
}

const ListWorks: React.FC<IProps> = ({ work }) => {
	const renderList = (): JSX.Element[] => {
		return work.map((work, index) => {
			return (
				<Link
					key={index}
					href={`/work/${work?.slug
						.toLowerCase()
						.replace(/ /g, '-')
						.replace(/[^\w-]+/g, '')}`}
					passHref
				>
					<a>
						<Stack
							direction={{
								xs: 'column',
								md: 'row',
							}}
							spacing={2}
							sx={{
								py: 2,
								px: { xs: 0, md: 2 },
								my: 1,
								cursor: 'pointer',
								borderRadius: 2,
								'&:hover': {
									transition: 'box-shadow .2s ease',
									boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
									' > div:first-of-type': { transition: 'opacity linear 100ms', opacity: 0.8 },
								},
							}}
						>
							<Box
								width={{ md: 260, sx: '100%' }}
								sx={{
									maxWidth: { xs: '100%', md: 240 },
									minWidth: 240,
								}}
							>
								<Image
									src={work?.image}
									width="100%"
									height={70}
									layout="responsive"
									alt="work-item"
									priority
								/>
							</Box>

							<Box>
								<Typography gutterBottom variant="h6" fontWeight="bold">
									{work?.title}
								</Typography>
								<Stack direction="row" spacing={2} mb={2}>
									<Chip label={work?.year} size="small" color="primary" />
									<Typography variant="body1" color="secondary.lighter">
										{work?.field}
									</Typography>
								</Stack>
								<Typography variant="body2">{work?.description}</Typography>
							</Box>
						</Stack>
					</a>
				</Link>
			)
		})
	}

	return <Box>{renderList()}</Box>
}

export default ListWorks
