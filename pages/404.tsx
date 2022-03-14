import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Looking from 'assets/icons/finder.svg'
import { MainLayout } from 'components/layout'
import { NextPageWithLayout } from 'models/common'
import Image from 'next/image'
import NextLink from 'next/link'

const NotFound: NextPageWithLayout = () => {
	return (
		<Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
			<Container>
				<Stack spacing={2} direction="column" alignItems="center" textAlign="center">
					<Box width={{ xs: 200 }}>
						<Image src={Looking} layout="responsive" alt="avatar" priority />
					</Box>
					<Box>
						<Typography variant="subtitle1">
							This page is not available. Sorry about that.
						</Typography>
					</Box>
					<NextLink href="/">
						<Button variant="contained" size="large">
							Return to home
						</Button>
					</NextLink>
				</Stack>
			</Container>
		</Box>
	)
}

NotFound.Layout = MainLayout

export default NotFound
