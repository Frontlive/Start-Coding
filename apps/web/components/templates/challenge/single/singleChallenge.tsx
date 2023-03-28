import { Button, CategoryTag, Heading, Text } from 'ui';
import Image from 'next/image';
import type { Challenge } from '../../../../types/types';
import { useState } from 'react';
import { LoginModal } from 'organisms/loginModal/loginModal';
import { useUser } from '@auth0/nextjs-auth0';
import { SendSolutionModal } from 'organisms/sendSolutionModal/sendSolutionModal';

type SingleChallengePageProps = {
	challenge: Challenge;
};

export const SingleChallengePage = ({
	challenge,
}: SingleChallengePageProps) => {
	const [showModal, setShowModal] = useState(false);

	const onClickHandler = () => {
		setShowModal((prevState) => !prevState);
	};

	const { isLoading, user } = useUser();

	return (
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<LoginModal
				isOpen={!user && !isLoading && showModal}
				onClose={onClickHandler}
			/>
			<SendSolutionModal
				isOpen={Boolean(user) && !isLoading && showModal}
				onClose={onClickHandler}
			/>
			<div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
				<Heading tag="h2" size="2xl" fontWeight="bold">
					{challenge?.title}
				</Heading>
				<div className="flex items-center">
					<Button variant="primary" onClick={onClickHandler}>
						Prześlij swoje rozwiązanie
					</Button>
				</div>
			</div>
			<section aria-labelledby="challenges-heading" className="pt-6 pb-24">
				<div className="flex flex-col md:flex-row">
					<Image
						src={challenge?.image}
						alt=""
						width="1200"
						height="1200"
						className="w-full h-full md:w-1/3 rounded-lg"
					/>
					<div className="md:pl-10 pt-5 md:pt-0">
						<ul className="pb-5">
							{challenge?.tags.map((tag, id) => (
								<CategoryTag label={tag} key={id} />
							))}
						</ul>
						<Text size="medium" variant="default" tag="p">
							{challenge?.description}
						</Text>
					</div>
				</div>
			</section>
		</main>
	);
};
