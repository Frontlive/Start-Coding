import { Button, CategoryTag, Heading, Input, Text } from 'ui';
import Image from 'next/image';
import type { Challenge } from '../../../../types/types';
import { useState } from 'react';
import { Modal } from 'molecules/modal/modal';
import { useForm } from 'react-hook-form';
import { LoginModal } from 'organisms/loginModal/loginModal';
import { useUser } from '@auth0/nextjs-auth0';

type SingleChallengePageProps = {
	challenge: Challenge;
};

type SolutionFormValues = {
	deployment: string;
	sourceCode: string;
	comments: string;
};

export const SingleChallengePage = ({
	challenge,
}: SingleChallengePageProps) => {
	const [showModal, setShowModal] = useState(false);

	const onClickHandler = () => {
		setShowModal((prevState) => !prevState);
	};

	const {
		register,
		formState: { errors },
	} = useForm<SolutionFormValues>({
		defaultValues: {
			deployment: '',
			sourceCode: '',
			comments: '',
		},
	});

	const { isLoading, user } = useUser();

	return (
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<LoginModal
				isOpen={!user && !isLoading && showModal}
				onClose={onClickHandler}
			/>
			<Modal
				title="Prześlij swoje rozwiązanie"
				isOpen={Boolean(user) && !isLoading && showModal}
				closeHandler={onClickHandler}
			>
				<form>
					<div className="pt-5">
						<Input
							{...register('deployment')}
							type="text"
							isError={Boolean(errors.deployment)}
							label="Link do wydeploy'owanego zadania"
							errorMessage={errors.deployment?.message || ''}
						/>
					</div>
					<div className="pt-5">
						<Input
							{...register('sourceCode')}
							type="text"
							isError={Boolean(errors.sourceCode)}
							label="Link do kodu"
							errorMessage={errors.sourceCode?.message || ''}
						/>
					</div>
					<div className="pt-5">
						<Input
							{...register('comments')}
							type="text"
							isError={Boolean(errors.comments)}
							label="Uwagi"
							errorMessage={errors.comments?.message || ''}
						/>
					</div>
					<Button variant="primary" type="submit">
						Wyślij
					</Button>
				</form>
			</Modal>
			<div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
				<Heading
					tag="h2"
					size="large"
					className="text-4xl font-bold tracking-tight text-gray-900"
				>
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
