import { Heading, VisuallyHidden } from 'ui';
import { ChallengesList } from 'organisms/challengesList/challengesList';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import type { Challenge, Filter, SortOption } from '../../../../types/types';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/20/solid';
import { Filters } from 'molecules/filters/filters';
import { SortMenu } from 'organisms/sortMenu/sortMenu';

const sortOptions: SortOption[] = [
	{ name: 'Difficulty', value: 'difficulty', href: '#', current: true },
	{ name: 'Od najnowszych', value: 'latest', href: '#', current: false },
];

const filters: Filter[] = [
	{
		id: 'difficulty',
		name: 'Difficulty',
		options: [
			{ value: 'easy', label: 'Easy', checked: false },
			{ value: 'medium', label: 'Medium', checked: true },
			{ value: 'hard', label: 'Hard', checked: false },
		],
	},
	{ id: 'category', name: 'Category', options: [] },
];

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
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	return (
		<>
			<Transition.Root show={mobileFiltersOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-40 lg:hidden"
					onClose={setMobileFiltersOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="translate-x-full"
						>
							<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
								<div className="flex items-center justify-between px-4">
									<h2 className="text-lg font-medium text-gray-900">Filtry</h2>
									<button
										type="button"
										className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
										onClick={() => setMobileFiltersOpen(false)}
									>
										<VisuallyHidden>Close menu</VisuallyHidden>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

								{/* Filters */}
								<form className="mt-4 border-t border-gray-200">
									<VisuallyHidden>Filtry</VisuallyHidden>
									<Filters filters={filters} />
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
					<Heading
						tag="h1"
						size="large"
						className="text-4xl font-bold tracking-tight text-gray-900"
					>
						Zadania
					</Heading>
					<div className="flex items-center">
						<SortMenu sortOptions={sortOptions} />

						<button
							type="button"
							className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
							onClick={() => setMobileFiltersOpen(true)}
						>
							<VisuallyHidden>Open filters</VisuallyHidden>
							<FunnelIcon className="h-5 w-5" aria-hidden="true" />
						</button>
					</div>
				</div>
				<section aria-labelledby="challenges-heading" className="pt-6 pb-24">
					<VisuallyHidden>Zadania</VisuallyHidden>

					<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
						{/* Filters */}
						<form className="hidden lg:block">
							<VisuallyHidden>Filters</VisuallyHidden>
							<Filters filters={filters} />
						</form>
						<ChallengesList challenges={challenges} />
					</div>
				</section>
			</main>
		</>
	);
};
