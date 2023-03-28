import clsx from 'clsx';

type PaginationItemProps = {
	pageNumber: number;
	isCurrent: boolean;
};

export const PaginationItem = ({
	pageNumber,
	isCurrent,
}: PaginationItemProps) => {
	return (
		<a
			href={`?page=${pageNumber}`}
			className={clsx(
				isCurrent
					? 'relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
					: 'relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex',
			)}
		>
			{pageNumber}
		</a>
	);
};
