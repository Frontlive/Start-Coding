import { NextPageWithLayout } from '../_app';
import { SingleChallengePage } from 'templates/challenge/single/singleChallenge';
import { MainLayout } from 'layouts/mainLayout';
import type { InferGetStaticPropsType } from 'next';
// import { useRouter } from 'next/router';
import { challenges } from 'templates/challenges/all/allChallenges';

export const getStaticPaths = async () => {
	return {
		paths: challenges.map((challenge) => ({
			params: { uuid: challenge.id.toString() },
		})),
		fallback: false,
	};
};

export const getStaticProps = async () => {
	const challenge = {
		id: '1',
		title: 'First Challenge',
		description:
			'This is example of challenge. In hac habitasse platea dictumst. Praesent eu auctor velit. Cras mattis gravida odio euismod placerat. Morbi vestibulum dapibus diam, a lacinia felis porttitor vel. Ut sodales tincidunt orci, vel condimentum nibh. Fusce in elit euismod, laoreet felis vel, rutrum lacus.',
		designs: '',
		difficulty: 'medium',
		image:
			'https://images.unsplash.com/photo-1498008122250-bcb854c8462d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		rating: 5,
		tags: ['TypeScript'],
	};

	return {
		props: {
			challenge,
		},
	};
};

const Challenge: NextPageWithLayout<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ challenge }) => {
	return <SingleChallengePage challenge={challenge} />;
};

Challenge.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Challenge;
