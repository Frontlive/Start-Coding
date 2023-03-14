import Image from 'next/image';
import { Card } from 'ui';
import { getTimeDiffFromTimestamp } from 'utils/timeDifference/getTimeDiffFromTimestamp';
import type { Comment } from '../../../types/types';
import { ReactComponent as Reply } from '/components/icons/reply.svg';
import { ReactComponent as Like } from '/components/icons/like.svg';

type CommentItemProps = Comment;

export const CommentItem = ({
	author,
	avatar,
	comment,
	date,
}: CommentItemProps) => {
	return (
		<div className="flex-col w-full py-2 mx-auto bg-white sm:px-4 md:px-4 md:w-2/3">
			<Card tag="div">
				<div className="flex flex-row md-10">
					<Image
						className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
						alt="Noob master's avatar"
						src={avatar}
						width={48}
						height={48}
					/>
					<div className="flex-col mt-1">
						<div className="flex items-center flex-1 px-4 font-bold leading-tight">
							{author}
							<span className="ml-2 text-xs font-normal text-gray-500">
								{getTimeDiffFromTimestamp(date)}
							</span>
						</div>
						<div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
							{comment}
						</div>
						<button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
							<div className="w-5 h-5">
								<Reply />
							</div>
						</button>
						<button className="inline-flex items-center px-1 -ml-1 flex-column">
							<div className="w-5 h-5">
								<Like />
							</div>
						</button>
					</div>
				</div>
			</Card>
		</div>
	);
};
