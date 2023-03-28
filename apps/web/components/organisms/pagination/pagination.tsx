import { useRouter } from 'next/router';
import { PaginationItem } from 'molecules/paginationItem/paginationItem';
import { PaginationArrow } from 'molecules/pagginationArrow/paginationArrow';

type PaginationProps = {
	numberOfItems: number;
};

export const Pagination = ({ numberOfItems }: PaginationProps) => {
	const router = useRouter();
	const currentPage: number =
		router.query.page && !isNaN(Number(router.query.page))
			? Number(router.query.page)
			: 1;
	const perPage =
		router.query.page && !isNaN(Number(router.query.limit))
			? Number(router.query.limit)
			: 11;
	const totalPages = Math.ceil(numberOfItems / perPage);

	const prevPageNumber = currentPage - 1;
	const nextPageNumber = currentPage + 1;
	const startNumberOfItemsOnCurrentPage = (currentPage - 1) * perPage + 1;
	const endNumberOfItemsOnCurrentPage =
		currentPage !== totalPages ? currentPage * perPage : numberOfItems;

	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
			<div className="flex flex-1 justify-between sm:hidden">
				<a
					href={`?page=${prevPageNumber}`}
					className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Poprzednia
				</a>
				<a
					href={`?page=${nextPageNumber}`}
					className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					{currentPage}
				</a>
				<a
					href="apps/web/components/organisms/pagination#"
					className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Następna
				</a>
			</div>
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						<span className="font-medium">
							{startNumberOfItemsOnCurrentPage}
						</span>
						-
						<span className="font-medium">{endNumberOfItemsOnCurrentPage}</span>{' '}
						z <span className="font-medium">{numberOfItems}</span> wyników
					</p>
				</div>
				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						<PaginationArrow
							pageNumber={prevPageNumber}
							isDisabled={currentPage === 1}
							type="prev"
						/>
						{Array.from({ length: totalPages }, (_, i) => (
							<PaginationItem
								key={i}
								pageNumber={i + 1}
								isCurrent={i + 1 === currentPage}
							/>
						))}
						{totalPages > 5 && (
							<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
								...
							</span>
						)}
						<PaginationArrow
							pageNumber={nextPageNumber}
							isDisabled={currentPage === totalPages}
							type="next"
						/>
					</nav>
				</div>
			</div>
		</div>
	);
};
