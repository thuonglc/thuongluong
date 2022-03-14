import { MainLayout } from 'components/layout'
import { AllWorks } from 'components/work/all-works'
import * as React from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
	return <AllWorks />
}

WorksPage.Layout = MainLayout
