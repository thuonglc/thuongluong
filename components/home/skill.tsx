import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import BrandButton from 'components/ui-component/Button/BrandButton'
import FullRoundButton from 'components/ui-component/Button/FullRoundButton'
import Icons from 'components/ui-component/icon'
import * as React from 'react'

export function SkillSection() {
	return (
		<Box component="section" pt={{ xs: 4, md: 10 }} pb={{ xs: 7, md: 9 }}>
			<Container>
				<Typography
					variant="h4"
					sx={{
						textAlign: 'center',
						fontWeight: 'bold',
						mb: { xs: 3.5, md: 5 },
					}}
				>
					Skill
				</Typography>
				<Stack
					direction="column"
					alignItems="center"
					textAlign="center"
					justifyContent="space-between"
				>
					<Box maxWidth={550}>
						<Typography sx={{ mb: { xs: 3.5, md: 5 }, lineHeight: 2 }}>
							I have spent about one year on improving my skills in&nbsp;
							<strong>website development</strong>&nbsp;using
							<FullRoundButton href="#" label="Javascript">
								<Icons.JS />
							</FullRoundButton>
							that I am now pretty confident in building apps using these tools:
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							maxWidth: { xs: '100%', md: 400 },
						}}
					>
						<BrandButton href="https://reactjs.org/">
							<Icons.React96 />
						</BrandButton>
						<BrandButton href="https://nextjs.com/">
							<Icons.Nextjs />
						</BrandButton>
						<BrandButton href="https://mui.com/">
							<Icons.MUI96 />
						</BrandButton>
						<BrandButton href="https://redux-toolkit.js.org/">
							<Icons.ReduxToolkit />
						</BrandButton>
						<BrandButton href="https://expressjs.com/">
							<Icons.ExpressJs />
						</BrandButton>
						<BrandButton href="https://getbootstrap.com/">
							<Icons.Bootstrap />
						</BrandButton>
						<BrandButton href="https://tailwindui.com/">
							<Icons.TailwindCss />
						</BrandButton>
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
