import { Card, Heading, Text } from 'ui';
import clsx from 'clsx';
import type { Opinion } from '../../../types/types';
import { UserAvatar } from 'molecules/userAvatar/userAvatar';

type OpinionItemProps = Opinion;

export const OpinionItem = ({ author, rating, comment }: OpinionItemProps) => {
	return (
		<div className="p-2">
			<Card tag="div">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<UserAvatar avatar={author.avatar_URL} size={24} />
					<div className="md:pl-5">
						<Heading tag="h3" size="large" className="font-bold">
							{author.name}
						</Heading>
						<div className="flex items-center">
							{Array.from({ length: 5 }, (_, i) => {
								const starClass =
									i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300';
								return (
									<svg
										aria-hidden="true"
										className={clsx('w-5 h-5', starClass)}
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										key={i}
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								);
							})}
						</div>
						<Text size="medium" tag="p" variant="default" position="left">
							{comment}
						</Text>
					</div>
				</div>
			</Card>
		</div>
	);
};
