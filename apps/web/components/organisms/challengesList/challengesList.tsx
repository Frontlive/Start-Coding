import { ChallengeItem } from 'molecules/challengeItem/challengeItem';
import type { Challenge } from '../../../types/types';

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

			{/*<div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full">*/}
			{/*	Zadania*/}
			{/*</div>*/}
		</div>
	);
};
