import { Typography } from '@mui/material'
import { Box } from '@mui/system'

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
	return (
		<Box>
			<Typography component="h1" variant="h3" color="primary.main">
				About page
			</Typography>
		</Box>
	)
}
