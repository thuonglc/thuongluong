import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import * as React from 'react'

interface SnackbarProps {
	severity: 'error' | 'warning' | 'info' | 'success'
	message: string
	open: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function CustomizedSnackbar({ severity, message, open }: SnackbarProps) {
	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar open={open} autoHideDuration={6000}>
				<Alert severity={severity} sx={{ width: '100%' }}>
					{message}
				</Alert>
			</Snackbar>
		</Stack>
	)
}
