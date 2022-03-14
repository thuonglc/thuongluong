import Button, { ButtonProps } from '@mui/material/Button'
import { blue } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

const BlueButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(blue[700]),
	backgroundColor: blue[700],
	textTransform: 'none',
	borderRadius: theme.spacing(3),
	'&:hover': {
		backgroundColor: blue[800],
	},
}))

export default BlueButton
