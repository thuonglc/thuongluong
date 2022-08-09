import { Box, Container, Stack, Typography } from '@mui/material'
import { MainLayout } from 'components/layout'
import WorkItem from 'components/work/work-item'
import { Work } from 'models/work'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import * as React from 'react'
import { getWorkList } from 'utils/works'

export interface WorkListPageProps {
	works: Work[]
}

export default function WorksPage({ works }: WorkListPageProps) {
	return (
		<Box component="section" py={{ xs: 4, md: 8 }}>
			<Container>
				<Typography variant="h4" fontWeight="bold" mb={2} pl={{ xs: 0, md: 2 }}>
					Work
				</Typography>
				<Stack direction="column" alignItems="center">
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
			</Container>
		</Box>
	)
}

WorksPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<WorkListPageProps> = async () => {
	const workList = await getWorkList()

	return {
		props: {
			works: workList,
		},
	}
}
