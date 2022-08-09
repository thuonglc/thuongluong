import { Seo } from 'components/common'
import { AboutSection, FeaturedWorks, HeroSection, SkillSection } from 'components/home'
import { MainLayout } from 'components/layout'
import { Work } from 'models/work'
import { GetStaticProps } from 'next'
import { getWorkList } from 'utils/works'

export interface WorkListPageProps {
	works: Work[]
}

function getDifference(array1: Work[], array2: string[]) {
	return array1.filter((object1) => {
		return array2.some((object2) => {
			return object1.slug === object2
		})
	})
}

export default function Home({ works }: WorkListPageProps) {
	const selectedFeatureWorks = ['resper-shop', 'resper-music', 'rsa-signature']
	const getFeaturedWorks = getDifference(works, selectedFeatureWorks)
	return (
		<>
			<Seo
				data={{
					title: 'Thuong Luong - Home page',
					description: 'Thuong Luong | My personal website',
					url: 'https://thuongluong.vercel.app/',
					thumbnailUrl:
						'https://res.cloudinary.com/dfxk0fqfp/image/upload/v1660065676/thuongresper.io/work/a5836f703ef1f5aface0_vp1e1t.jpg',
				}}
			/>
			<HeroSection />
			<AboutSection />
			{/* <RecentPosts /> */}
			<FeaturedWorks works={getFeaturedWorks} />
			<SkillSection />
		</>
	)
}

Home.Layout = MainLayout

export const getStaticProps: GetStaticProps<WorkListPageProps> = async () => {
	const workList = await getWorkList()

	return {
		props: {
			works: workList,
		},
	}
}
