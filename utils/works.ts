import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { Work } from 'models/work'

const WORK_FOLDER = path.join(process.cwd(), 'work')

export async function getWorkList(): Promise<Work[]> {
	const fileNameList = fs.readdirSync(WORK_FOLDER)

	const workList: Work[] = []
	for (const fileName of fileNameList) {
		const filePath = path.join(WORK_FOLDER, fileName)
		const fileContents = fs.readFileSync(filePath, 'utf8')
		const { data, excerpt, content } = matter(fileContents, {
			excerpt_separator: '<!-- truncate-->',
		})

		workList.push({
			id: fileName,
			title: data.title,
			slug: data.slug,
			thumbnail: data.thumbnail,
			publishedDate: data.date,
			tagList: data.tags,
			shortDescription: data.shortDescription || '',
			description: excerpt || '',
			mdContent: content,
			images: data.image_urls,
		})
	}

	return workList
}
