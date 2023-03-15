import { Heading } from 'ui';
import { ProtectedComponent } from 'organisms/protectedComponent/protectedComponent';
import { AddComment } from 'organisms/addComment/addComment';
import { CommentItem } from 'molecules/commentItem/commentItem';
import { commentsMock } from 'molecules/comments/comments.mock';

const comments = commentsMock.sort((a, b) => b.timestamp - a.timestamp);

export const Comments = () => {
	return (
		<div>
			<div className="flex-col w-full py-2 mx-auto bg-white sm:px-4 md:px-4 md:w-2/3">
				<div className="pb-2">
					<Heading tag="h3" size="medium">
						Komentarze ({comments.length})
					</Heading>
				</div>
				<ProtectedComponent info="Aby dodać komentarz musisz być zalogowany">
					<AddComment />
				</ProtectedComponent>
			</div>
			{comments.map((comment, id) => (
				<CommentItem {...comment} key={id} />
			))}
		</div>
	);
};
