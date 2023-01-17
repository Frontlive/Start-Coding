import { MainLayout } from 'layouts/mainLayout';
import { NextPageWithLayout } from '../_app';
import {AllChallengesPage} from "templates/challenges/all/allChallenges";

const AllChallenges: NextPageWithLayout = () => {
    return (
        <AllChallengesPage />
    );
};

AllChallenges.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default AllChallenges;
