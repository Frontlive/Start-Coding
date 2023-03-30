import { MainLayout } from 'layouts/mainLayout';
import { NewChallengePage } from 'templates/challenge/new/newChallenge';
import { ProtectedPage } from 'organisms/protectedPage/protectedPage';
import { NextPageWithLayout } from '../_app';
import 'react-quill/dist/quill.snow.css';

const NewChallenge: NextPageWithLayout = () => {
	return (
		<ProtectedPage>
			<NewChallengePage />
		</ProtectedPage>
	);
};

NewChallenge.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default NewChallenge;
