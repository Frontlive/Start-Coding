import { Heading, Spinner, VisuallyHidden } from 'ui';
import { ChallengesList } from 'organisms/challengesList/challengesList';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import type { Filter, SortOption } from '../../../../types/types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FunnelIcon } from '@heroicons/react/20/solid';
import { Filters } from 'molecules/filters/filters';
import { SortMenu } from 'organisms/sortMenu/sortMenu';
import { useGetTaskWithPaginationQuery } from 'generated';

const sortOptions: SortOption[] = [
	{ name: 'Difficulty', value: 'difficulty', href: '#', current: true },
	{ name: 'Od najnowszych', value: 'latest', href: '#', current: false },
];

const filters: Filter[] = [
	{
		id: 'difficulty',
		name: 'Poziom trudności',
		options: [
			{ value: 'INTERMEDIATE', label: 'Mid', checked: false },
			{ value: 'BEGINNER', label: 'Początkujący', checked: false },
			{ value: 'ADVANCED', label: 'Zaawansowany', checked: false },
		],
	},
	{ id: 'category', name: 'Category', options: [] },
];

export const AllChallengesPage = () => {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [page, setPage] = useState(1);

	const { data, loading } = useGetTaskWithPaginationQuery({
		variables: { page },
	});

	const challenges = data?.tasks || [];

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
						<form className="hidden lg:block">
							<VisuallyHidden>Filters</VisuallyHidden>
							<Filters filters={filters} />
						</form>
						{loading ? <Spinner /> : <ChallengesList challenges={challenges} />}
					</div>
				</section>
			</main>
		</>
	);
};
