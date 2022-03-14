import { CacheProvider } from '@emotion/react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { IconButton } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import axiosClient from 'apis/axios-client'
import { EmptyLayout } from 'components/layout'
import { AppPropsWithLayout } from 'models'
import { createContext, useContext, useMemo, useState } from 'react'
import { SWRConfig } from 'swr'
import { createEmotionCache, getDesignTokens, overrideTheme } from 'utils'
import '../styles/globals.css'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export function ButtonChangeMode() {
	const theme = useTheme()
	const colorMode = useContext(ColorModeContext)
	return (
		<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
			{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	)
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout

	// set mode
	const [mode, setMode] = useState<'light' | 'dark'>('light')
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[]
	)
	const theme = useMemo(() => createTheme(overrideTheme, getDesignTokens(mode)), [mode])

	return (
		<CacheProvider value={clientSideEmotionCache}>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</SWRConfig>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</CacheProvider>
	)
}
export default MyApp
