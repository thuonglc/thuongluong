import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import BlueButton from 'components/ui-component/Button/BlueButton'
import { WorkItem } from 'components/work/work-item'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Work } from 'models/work'

export interface WorkListPageProps {
	works: Work[]
}

export function FeaturedWorks({ works }: WorkListPageProps) {
	const router = useRouter()

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
					{works.map((work) => (
						<Box key={work.id}>
							<Link href={`/work/${work.slug}`}>
								<a>
									<WorkItem work={work} />
								</a>
							</Link>
						</Box>
					))}
				</Stack>
				<Box textAlign="center">
					<Link href={'/work'} passHref>
						<BlueButton variant="contained" size="large">
							See more
						</BlueButton>
					</Link>
				</Box>
			</Container>
		</Box>
	)
}
