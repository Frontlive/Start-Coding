import { ChallengeItem } from 'molecules/challengeItem/challengeItem';
import { Challenge } from '../../../../types/types';
import { Heading } from 'atoms/heading/heading';

const challenges: Challenge[] = [
	{
		id: 1,
		title: 'First Challenge',
		description:
			'This is example of challenge. In hac habitasse platea dictumst. Praesent eu auctor velit. Cras mattis gravida odio euismod placerat. Morbi vestibulum dapibus diam, a lacinia felis porttitor vel. Ut sodales tincidunt orci, vel condimentum nibh. Fusce in elit euismod, laoreet felis vel, rutrum lacus.',
		designs: '',
		difficulty: 'medium',
		image:
			'https://images.unsplash.com/photo-1498008122250-bcb854c8462d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		rating: 5,
	},
	{
		id: 2,
		title: 'Second Challenge',
		description:
			'This is example of challenge. In hac habitasse platea dictumst. Praesent eu auctor velit. Cras mattis gravida odio euismod placerat. Morbi vestibulum dapibus diam, a lacinia felis porttitor vel. Ut sodales tincidunt orci, vel condimentum nibh. Fusce in elit euismod, laoreet felis vel, rutrum lacus.',

		designs: '',
		difficulty: 'advanced',
		image:
			'https://cdn.pixabay.com/photo/2020/11/28/06/15/cold-5783718_1280.jpg',
		rating: 3,
	},
];

export const AllChallenges = () => {
	return (
		<section className="mx-auto w-11/12" aria-labelledby="pageHeading">
			<Heading tag="h1" size="large" id="pageHeading">
				Strona z zadaniami
			</Heading>
			<ul>
				{challenges.map((challenge) => (
					<ChallengeItem key={challenge.id} {...challenge} />
				))}
			</ul>
		</section>
	);
};
