import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { VisuallyHidden } from 'ui';
import { useRouter } from 'next/router';

type PaginationProps = {
	quantity: number;
};

export const Pagination = ({ quantity }: PaginationProps) => {
	const router = useRouter();
	const currentPage: number =
		router.query.page && !isNaN(Number(router.query.page))
			? Number(router.query.page)
			: 1;
	const perPage =
		router.query.page && !isNaN(Number(router.query.limit))
			? Number(router.query.limit)
			: 11;
	const totalPages = Math.ceil(quantity / perPage);

	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
			<div className="flex flex-1 justify-between sm:hidden">
				<a
					href={`?page=${currentPage - 1}`}
					className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Previous
				</a>
				<a
					href={`?page=${currentPage + 1}`}
					className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{currentPage}
				</a>
				<a
					href="#"
					className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Next
				</a>
			</div>
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						<span className="font-medium">
							{(currentPage - 1) * perPage + 1}
						</span>
						-
						<span className="font-medium">
							{currentPage !== totalPages ? currentPage * perPage : quantity}
						</span>{' '}
						z <span className="font-medium">{quantity}</span> wyników
					</p>
				</div>
				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						{totalPages > 1 && (
							<a
								href={currentPage > 1 ? `?page=${currentPage - 1}` : ''}
								className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
							>
								<VisuallyHidden>Poprzednia strona</VisuallyHidden>
								<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
							</a>
						)}
						{Array.from({ length: totalPages }, (_, i) => (
							<a
								key={i}
								href={`?page=${i + 1}`}
								className={clsx(
									i + 1 === currentPage
										? 'relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
										: 'relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex',
								)}
							>
								{i + 1}
							</a>
						))}
						{totalPages > 5 && (
							<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
								...
							</span>
						)}
						{totalPages > 1 && (
							<a
								href={
									currentPage <= totalPages - 1
										? `?page=${currentPage + 1}`
										: ''
								}
								className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
							>
								<VisuallyHidden>Następna strona</VisuallyHidden>
								<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
							</a>
						)}
					</nav>
				</div>
			</div>
		</div>
	);
};
