import type { Comment } from '../../../types/types';
import { ReactComponent as Reply } from '/components/icons/reply.svg';
import { ReactComponent as Liked } from '/components/icons/liked.svg';
import { getTimeDiffFromTimestamp } from 'utils/timeDifference/getTimeDiffFromTimestamp';
import { UserAvatar } from 'molecules/userAvatar/userAvatar';

type CommentItemWithReplyProps = Comment;

export const CommentReply = ({
	avatar,
	author,
	timestamp,
	comment,
}: CommentItemWithReplyProps) => {
	// TODO: Add reply functionality
	return (
		<>
			<hr className="my-2 ml-16 border-gray-200" />
			<div className="flex flex-row pt-1 md-10 md:ml-16">
				<UserAvatar avatar={avatar} size={12} />
				<div className="flex-col mt-1">
					<div className="flex items-center flex-1 px-4 font-bold leading-tight">
						{author}
						<span className="ml-2 text-xs font-normal text-gray-500">
							{getTimeDiffFromTimestamp(timestamp)}
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
							<Liked />
						</div>
					</button>
				</div>
			</div>
		</>
	);
};
