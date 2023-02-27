import { CategoryTag, Heading, Text } from 'ui';
import Image from 'next/image';
import { Challenge } from '../../../../types/types';

type SingleChallengePageProps = {
	challenge: Challenge;
};

export const SingleChallengePage = ({
	challenge,
}: SingleChallengePageProps) => {
	return (
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6">
				<Heading
					tag="h1"
					size="large"
					className="text-4xl font-bold tracking-tight text-gray-900"
				>
					{challenge?.title}
				</Heading>
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
					<div>
						{challenge?.tags.map((tag) => (
							<CategoryTag label={tag} />
						))}
						<Text size="medium" variant="default" tag="p">
							{challenge?.description}
						</Text>
					</div>
				</div>
			</section>
		</main>
	);
};
