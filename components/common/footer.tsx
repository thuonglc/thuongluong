import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'

export function Footer() {
	return (
		<Box component="footer" py={3} mt={2} textAlign="center">
			<Stack direction="row" spacing={3} justifyContent="center">
				<Box component="a" href="https://www.facebook.com/ThuongResper" target="_blank">
					<FacebookIcon />
				</Box>
				<Box component="a" href="https://www.instagram.com/thuongresper/" target="_blank">
					<InstagramIcon />
				</Box>
				<Box component="a" href="https://twitter.com/thuongresper" target="_blank">
					<TwitterIcon />
				</Box>
				<Box component="a" href="https://www.linkedin.com/in/thuong-resper/" target="_blank">
					<LinkedInIcon />
				</Box>
				<Box component="a" href="https://github.com/thuong-resper" target="_blank">
					<GitHubIcon />
				</Box>
			</Stack>
			<Stack>
				<Typography variant="caption">©thuongluong, 2022. All rights reserved</Typography>
			</Stack>
		</Box>
	)
}
