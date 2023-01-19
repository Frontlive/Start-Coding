import { Heading } from 'atoms/heading/heading';
import { ChallengesList } from 'organisms/challengesList/challengesList';
import type { Challenge } from '../../../../types/types';
import { VisuallyHidden } from 'atoms/visuallyHidden/visuallyHidden';

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
		tags: ['TypeScript'],
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
		tags: ['JavaScript', 'React'],
	},
];
export const AllChallengesPage = () => {
	return (
		// <section className="p-8 flex justify-center items-center">
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
				<Heading
					tag="h1"
					size="large"
					className="text-4xl font-bold tracking-tight text-gray-900"
				>
					Zadania
				</Heading>
			</div>
			<section aria-labelledby="challenges-heading" className="pt-6 pb-24">
				<VisuallyHidden>Zadania</VisuallyHidden>

				<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
					{/* Filters */}
					<form className="hidden lg:block">
						<h3 className="sr-only">Filters</h3>
						<ul
							role="list"
							className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
						>
							filtry
						</ul>
					</form>
					<ChallengesList challenges={challenges} />
				</div>
			</section>
		</main>
		// </section>
	);
};
