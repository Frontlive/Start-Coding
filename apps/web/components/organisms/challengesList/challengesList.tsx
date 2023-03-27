import { ChallengeItem } from 'molecules/challengeItem/challengeItem';
import type { Challenge } from '../../../types/types';
import { Pagination } from 'molecules/pagination/pagination';

type TasksListProps = {
	challenges: Challenge[];
};
export const ChallengesList = ({ challenges }: TasksListProps) => {
	return (
		<div className="flex flex-col justify-between lg:col-span-3">
			<ul>
				{challenges.map((challenge) => {
					return <ChallengeItem key={challenge.id} {...challenge} />;
				})}
			</ul>

			<Pagination quantity={challenges.length} />
		</div>
	);
};
