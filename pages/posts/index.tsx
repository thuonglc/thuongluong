import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'

export interface PostListPageProps {
	posts: any[]
}

export default function PostListPage(props: PostListPageProps) {
	return <div>Post List Page</div>
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	console.log('getStaticProps')

	return {
		props: { posts: [] },
	}
}
