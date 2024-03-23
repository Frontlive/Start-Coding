import type { ReactNode } from 'react';
import { Hero } from '../../components/inc/Hero';
import { Navigation } from '../../components/inc/navigation/Navigation';

export default function HomePageLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<div>
			<Navigation />
			<Hero />

			{children}
		</div>
	);
}
