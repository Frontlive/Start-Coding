import type { NextPage } from 'next';
import { MainLayout } from '../components/layouts/mainLayout';
import { Homepage } from '../components/templates/homepage/homepage';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<Homepage />
		</MainLayout>
	);
};

export default Home;
