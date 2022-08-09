import { Container, Typography } from '@mui/material'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse/lib'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import Script from 'next/script'
import { Box } from '@mui/material'
import { Work } from 'models/work'
import { MainLayout } from 'components/layout'
import { WorkImage } from 'components/work/work-page'
import { getWorkList } from 'utils/works'
import { format } from 'date-fns'

export interface WorkPageProps {
	work: Work
}

export default function WorkDetailPage({ work }: WorkPageProps) {
	if (!work) return null

	return (
		<Box>
			<Container>
				<Typography gutterBottom variant="h5" fontWeight="bold" mt={2}>
					{work.title}
				</Typography>
				<p>{format(new Date(work.publishedDate), 'dd/MM/yyyy')}</p>
				<div dangerouslySetInnerHTML={{ __html: work.htmlContent || '' }}></div>
				{work?.images.map((img) => (
					<WorkImage key={img} src={img} alt={img} />
				))}
			</Container>

			<Script src="/prism.js" strategy="afterInteractive"></Script>
		</Box>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const workList = await getWorkList()

	return {
		paths: workList.map((work: Work) => ({ params: { slug: work.slug } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<WorkPageProps> = async (
	context: GetStaticPropsContext
) => {
	const workList = await getWorkList()
	const slug = context.params?.slug
	if (!slug) return { notFound: true }

	const work = workList.find((x) => x.slug === slug)
	if (!work) return { notFound: true }

	// parse md to html
	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeDocument, { title: 'Work details page' })
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(work.mdContent || '')
	work.htmlContent = file.toString()

	return {
		props: {
			work,
		},
	}
}

WorkDetailPage.Layout = MainLayout
