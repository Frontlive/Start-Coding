import { MainLayout } from 'layouts/mainLayout';
import { NewChallengePage } from 'templates/challenge/new/newChallenge';
import { ProtectedPage } from 'organisms/protectedPage/protectedPage';
import type { NextPageWithLayout } from '../_app';
import type { GetServerSideProps } from 'next';
import { getSession } from '@auth0/nextjs-auth0';

const NewChallenge: NextPageWithLayout = () => {
	return (
		<ProtectedPage>
			<NewChallengePage />
		</ProtectedPage>
	);
};

NewChallenge.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default NewChallenge;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = getSession(ctx.req, ctx.res);

	if (session) {
		console.log(session.accessToken);
	}

	return {
		props: {},
	};
};
