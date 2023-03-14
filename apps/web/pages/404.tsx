import { MainLayout } from 'layouts/mainLayout';
import { Error404 } from 'templates/errors/404';
import type { NextPageWithLayout } from './_app';

const NotFoundPage: NextPageWithLayout = () => {
	return <Error404 />;
};

NotFoundPage.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default NotFoundPage;
