import { ReactNode } from 'react';
import { Header } from 'organisms/header';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
