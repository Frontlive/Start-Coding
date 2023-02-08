import { Card } from 'ui/components/atoms/card/card';
import { Heading } from 'ui/components/atoms/heading/heading';
import { Text } from 'ui/components/atoms/text/text';
import Image from 'next/image';
import type { Challenge } from '../../../types/types';
import { CategoryTag } from 'ui/components/atoms/categoryTag/categoryTag';

type TaskItemProps = Challenge;

export const ChallengeItem = ({
	id,
	title,
	image,
	description,
	difficulty,
	tags,
}: TaskItemProps) => {
	return (
		<li className="mb-5">
			<a href={`/challenge/${id}`}>
				<Card tag="div">
					<div className="flex flex-col lg:flex-row pb-2">
						<Image
							src={image}
							alt=""
							width="120"
							height="120"
							className="w-full h-full"
						/>
						<div className="lg:px-5">
							<Heading tag="h2" size="large">
								{title}
							</Heading>
							<Text size="medium" variant="default" tag="p" position="left">
								{description}
							</Text>
						</div>
					</div>
					<Text size={'medium'} variant="default" tag="p" position="left">
						📶 {difficulty}
					</Text>
					<ul className="flex flex-wrap">
						{tags.map((tag) => {
							return <CategoryTag key={tag} label={tag} />;
						})}
					</ul>
				</Card>
			</a>
		</li>
	);
};
