import { AboutSection, FeaturedWorks, HeroSection, SkillSection } from 'components/home'
import { MainLayout } from 'components/layout'
import { NextPageWithLayout } from 'models/common'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
	return (
		<MainLayout>
			<Head>
				<title>Thuong Luong - Homepage</title>
				<meta name="description" content="Thuong's homepage" />
				<link rel="icon" href="/avatar.png" />
			</Head>
			<HeroSection />
			<AboutSection />
			{/* <RecentPosts /> */}
			<FeaturedWorks />
			<SkillSection />
		</MainLayout>
	)
}

export default Home
