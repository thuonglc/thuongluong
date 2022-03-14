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
