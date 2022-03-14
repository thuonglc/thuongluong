import TimelapseIcon from '@mui/icons-material/Timelapse'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link passHref href="/">
			<a>
				<Box
					display="flex"
					sx={[
						{
							'&:hover svg': {
								transform: 'rotate(90deg)',
								transition: '200ms ease',
							},
						},
					]}
				>
					<TimelapseIcon width={20} height={20} />
					<Typography fontFamily="Segoe UI Emoji" fontWeight="bold" ml={1}>
						Thuong Luong
					</Typography>
				</Box>
			</a>
		</Link>
	)
}

export default Logo
