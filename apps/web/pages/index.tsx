import { useGetTasksQuery } from 'generated';
import { MainLayout } from 'layouts/mainLayout';
import { Homepage } from 'templates/homepage/homepage';
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
	const { data, loading } = useGetTasksQuery();

	console.log(data, loading);

	return <Homepage />;
};

Home.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Home;
