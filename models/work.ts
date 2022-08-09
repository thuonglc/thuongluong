export interface IWorkCard {
	work: {
		title: string
		slug: string
		image: string
		year: number | string
		field: string
		description: string
	}[]
}

export interface Work {
	id: number | string
	title: string
	slug: string
	thumbnail: string
	publishedDate: string
	tagList: string[]
	shortDescription: string
	description: string
	images: string[]
	mdContent?: string
	htmlContent?: string
}
