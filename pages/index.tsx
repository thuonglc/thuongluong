import { Box } from '@mui/system'
import {
	AboutSection,
	FeaturedWorks,
	HeroSection,
	RecentPosts,
	SkillSection,
} from 'components/home'
import { MainLayout } from 'components/layout'
import { NextPageWithLayout } from 'models/common'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<AboutSection />
			{/* <RecentPosts /> */}
			<FeaturedWorks />
			<SkillSection />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
