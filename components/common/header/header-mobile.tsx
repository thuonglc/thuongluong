import BookIcon from '@mui/icons-material/Book'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import { IconButton, Link as MuiLink, ListItem } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ButtonChangeMode } from 'pages/_app'
import * as React from 'react'
import { ROUTE_LIST } from './route'

type Anchor = 'right'

const changeToIcon = (route: string) => '</route>'

export function HeaderMobile() {
	const router = useRouter()

	const [state, setState] = React.useState({
		right: false,
	})

	const getIcon = (icon: string) => {
		switch (icon) {
			case 'Works':
				return <WorkspacePremiumIcon />
			case 'Blog':
				return <BookIcon />
			default:
				return <HomeIcon />
		}
	}

	const toggleDrawer =
		(anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}

			setState({ ...state, [anchor]: open })
		}

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List component="nav">
				{ROUTE_LIST.map((route) => (
					<Link key={route.path} href={route.path} passHref>
						<ListItem
							button
							component={MuiLink}
							sx={{ color: router.pathname === route.path ? 'text.secondary' : 'text.primary' }}
						>
							<ListItemText primary={route.label} />
						</ListItem>
					</Link>
				))}
			</List>
		</Box>
	)

	return (
		<Box
			sx={{
				display: { xs: 'block', md: 'none' },
				textAlign: 'right',
				position: 'sticky',
				top: 0,
				width: '100%',
				zIndex: 1,
				backgroundColor: 'background.default',
			}}
		>
			<ButtonChangeMode />
			<IconButton aria-label="header-mobile" onClick={toggleDrawer('right', true)}>
				<MenuIcon sx={{ color: 'text.primary' }} />
			</IconButton>
			<Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
				{list('right')}
			</Drawer>
		</Box>
	)
}
