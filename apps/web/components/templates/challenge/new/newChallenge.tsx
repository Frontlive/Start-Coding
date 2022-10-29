import { NewChallengeForm } from 'organisms/newChallengeForm/newChallengeForm';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { DndProvider } from 'react-dnd';

export const NewChallengePage = () => {
	return (
		<section className="p-8 flex justify-center items-center">
			<DndProvider backend={HTML5Backend}>
				<NewChallengeForm />
			</DndProvider>
		</section>
	);
};
