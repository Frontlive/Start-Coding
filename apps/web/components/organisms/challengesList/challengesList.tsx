import { ChallengeItem } from 'molecules/challengeItem/challengeItem';
import type { GetTaskWithPaginationQueryHookResult } from 'generated';

type TasksListProps = {
	challenges: GetTaskWithPaginationQueryHookResult['data']['tasks'][];
};

export const ChallengesList = ({ challenges }: TasksListProps) => {
	return (
		<div className="flex flex-col justify-between lg:col-span-3">
			<ul>
				{challenges.map((challenge) => {
					return <ChallengeItem key={challenge.id} {...challenge} />;
				})}
			</ul>
		</div>
	);
};
