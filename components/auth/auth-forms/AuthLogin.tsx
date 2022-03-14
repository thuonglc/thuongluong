import { yupResolver } from '@hookform/resolvers/yup'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
	Alert,
	Box,
	Button,
	Checkbox,
	Divider,
	FormControlLabel,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { authApi } from 'apis/auth-api'
import AnimateButton from 'components/ui-component/Button/AnimateButton'
import { useAuth } from 'hooks'
import Google from 'assets/icons/social-google.svg'
import Cookies from 'js-cookie'
import { LoginPayload } from 'models'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { SubmitHandler, useForm, useFormState } from 'react-hook-form'
import * as yup from 'yup'

export interface LoginPageProps {}

//yup validation
const schema = yup.object().shape({
	email: yup.string().email('Email should have correct format').required('Email is required field'),
	password: yup.string().required('No password provided'),
})

const googleClientId = '97775254401-l7nq4tc328dgqvb20ru95acl3pqn4quv.apps.googleusercontent.com'

export default function AuthLogin(props: LoginPageProps) {
	const theme = useTheme()
	const { profile, mutate, logout } = useAuth()
	const [openAlert, setOpenAlert] = useState<boolean>(false)
	const [message, setMessage] = useState<string>('')
	const [checked, setChecked] = useState<boolean>(true)

	// if logged in, redirect to the dashboard
	useEffect(() => {
		if (profile && !logout) {
			Router.replace('/')
		}
	}, [profile, logout])

	// form
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onBlur',
		resolver: yupResolver(schema),
	})

	const { isSubmitting } = useFormState({ control })

	// submit form
	const onSubmit: SubmitHandler<LoginPayload> = async (payload: LoginPayload) => {
		try {
			const response = await authApi.login(payload)
			if (response) {
				const setCookie = (response: any) => {
					const { accessToken } = response
					Cookies.set('access_token', accessToken, { expires: 1 }) //1 day
				}
				setCookie(response)
			}
		} catch (error: any) {
			setOpenAlert((prev) => !prev)
			setMessage(error.response.data.message)
		}
		mutate()
	}

	// login with google
	const responseGoogle = async (response: any) => {
		try {
			const resultLogin = await authApi.loginGoogle(response)
			console.log(resultLogin)
		} catch (err) {}
	}

	const [showPassword, setShowPassword] = useState<boolean>(false)
	const handleClickShowPassword = () => {
		setShowPassword((prev) => !prev)
	}

	const handleMouseDownPassword = (event: any) => {
		event.preventDefault()
	}

	return (
		<div>
			<Box sx={{ m: 'auto' }}>
				<Typography variant="h5" color="primary" textAlign="center" fontWeight={500}>
					Hi, Welcome Back
				</Typography>
				<Typography variant="body1" my={1} textAlign="center">
					Enter your credentials to continue
				</Typography>
			</Box>
			<Stack direction="column" justifyContent="center" spacing={2}>
				<Box my={2}>
					<GoogleLogin
						clientId={googleClientId}
						render={(renderProps) => (
							<AnimateButton
								offset={10}
								type={'scale'}
								direction={'right'}
								scale={{
									hover: 1,
									tap: 0.95,
								}}
							>
								<Button
									disableElevation
									fullWidth
									size="large"
									variant="outlined"
									sx={{
										color: 'grey.700',
										backgroundColor: theme.palette.grey[50],
										borderColor: theme.palette.grey[100],
									}}
									onClick={renderProps.onClick}
									disabled={renderProps.disabled}
									// disabled={true} // disable google login. Create a new googleClientId for login when using
								>
									<Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
										<Image src={Google} layout="responsive" alt="google" priority />
									</Box>
									Sign in with Google
								</Button>
							</AnimateButton>
						)}
						buttonText="Sign in with Google"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
				</Box>
				<Box
					sx={{
						alignItems: 'center',
						display: 'flex',
					}}
				>
					<Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
					<Button
						variant="outlined"
						sx={{
							cursor: 'unset',
							mx: 2,
							py: 0.5,
							px: 7,
							borderColor: `${theme.palette.grey[100]} !important`,
							color:
								theme.palette.mode === 'dark'
									? '#f3f6f9!important'
									: `${theme.palette.grey[900]}!important`,
							fontWeight: 500,
						}}
						disableRipple
						disabled
					>
						OR
					</Button>
					<Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
				</Box>
				<Typography sx={{ textAlign: 'center' }} variant="subtitle1">
					Sign in with Email address
				</Typography>
			</Stack>
			<Box>
				<form onSubmit={handleSubmit(onSubmit)} noValidate>
					<TextField
						{...register('email')}
						variant="outlined"
						margin="normal"
						fullWidth
						id="email"
						type="text"
						placeholder="Email"
						name="email"
						size="medium"
						InputLabelProps={{
							shrink: true,
						}}
						error={!!errors.email}
						helperText={errors?.email?.message}
						disabled={isSubmitting}
						autoComplete="username"
					/>
					<TextField
						{...register('password')}
						type={showPassword ? 'text' : 'password'}
						id="password"
						variant="outlined"
						margin="normal"
						fullWidth
						placeholder="Password"
						name="password"
						size="medium"
						InputLabelProps={{
							shrink: true,
						}}
						autoComplete="current-password"
						disabled={isSubmitting}
						error={!!errors.password}
						helperText={errors?.password?.message}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										color="inherit"
									>
										{showPassword ? (
											<Visibility fontSize="small" />
										) : (
											<VisibilityOff fontSize="small" />
										)}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
						<FormControlLabel
							control={
								<Checkbox
									checked={checked}
									onChange={(event) => setChecked(event.target.checked)}
									name="checked"
									color="primary"
								/>
							}
							label="Remember me"
						/>
						<Link passHref href="/recover">
							<Typography variant="subtitle1" color="text.primary" sx={{ cursor: 'pointer' }}>
								Forgot Password?
							</Typography>
						</Link>
					</Stack>
					{openAlert && <Alert severity="error">{message}</Alert>}
					<Box sx={{ mt: 2 }}>
						<Button
							disableElevation
							disabled={isSubmitting}
							fullWidth
							size="large"
							type="submit"
							variant="contained"
							color="primary"
						>
							Sign in
						</Button>
					</Box>
				</form>
			</Box>
			<Box my={2}>
				<Link passHref href="/register">
					<Typography variant="body1" textAlign="center" sx={{ cursor: 'pointer' }}>
						Do not have an account?
					</Typography>
				</Link>
			</Box>
		</div>
	)
}
