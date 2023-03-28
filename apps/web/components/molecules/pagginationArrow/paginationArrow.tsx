import { VisuallyHidden } from 'ui';
import {
	ChevronLeftIcon as PrevPageIcon,
	ChevronRightIcon as NextPageIcon,
} from '@heroicons/react/20/solid';
import clsx from 'clsx';

type PaginationArrowProps = {
	pageNumber: number;
	isDisabled: boolean;
	type: 'next' | 'prev';
};

export const PaginationArrow = ({
	pageNumber,
	isDisabled,
	type,
}: PaginationArrowProps) => {
	return (
		<a
			href={isDisabled ? '' : `?page=${pageNumber}`}
			className={clsx(
				type === 'prev' && 'rounded-l-lg',
				type === 'next' && 'rounded-r-lg',
				'relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0',
			)}
		>
			{type === 'prev' && (
				<>
					<VisuallyHidden>Poprzednia strona</VisuallyHidden>
					<PrevPageIcon className="h-5 w-5" aria-hidden="true" />
				</>
			)}
			{type === 'next' && (
				<>
					<VisuallyHidden>Następna strona</VisuallyHidden>
					<NextPageIcon className="h-5 w-5" aria-hidden="true" />
				</>
			)}
		</a>
	);
};
