import { getSession } from '@auth0/nextjs-auth0';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { MainLayout } from '../components/layouts/mainLayout';
import { Homepage } from '../components/templates/homepage/homepage';

export const getServerSideProps: GetServerSideProps<{
	token: string;
}> = async ({ req, res }) => {
	const session = getSession(req, res);

	return {
		props: {
			token: session?.accessToken ?? '',
		},
	};
};

const Home = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
	console.log(props.token);
	return (
		<MainLayout>
			<Homepage />
		</MainLayout>
	);
};

export default Home;
