import { MainLayout } from 'layouts/mainLayout';
import { Error404 } from 'templates/errors/404';
import { NextPageWithLayout } from './_app';

const NotFound: NextPageWithLayout = () => {
	return <Error404 />;
};

NotFound.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default NotFound;
