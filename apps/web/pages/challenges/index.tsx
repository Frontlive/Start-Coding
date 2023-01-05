import { MainLayout } from 'layouts/mainLayout';
import { NextPageWithLayout } from '../_app';
import { AllChallenges } from 'templates/challenges/all/allChallenges';

const Challenges: NextPageWithLayout = () => {
	return <AllChallenges />;
};

Challenges.getLayout = function getLayout(page) {
	return <MainLayout>{page}</MainLayout>;
};

export default Challenges;
