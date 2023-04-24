import { Opinions } from 'molecules/opinions/opinions';
import { Comments } from 'molecules/comments/comments';
import { Solutions } from 'molecules/solutions/solutions';

type TabObject = {
	label: string;
	content: () => JSX.Element;
};

export const tabs: TabObject[] = [
	{
		label: 'Opinie',
		content: Opinions,
	},
	{
		label: 'Rozwiązania',
		content: Solutions,
	},
	{
		label: 'Komentarze',
		content: Comments,
	},
];
