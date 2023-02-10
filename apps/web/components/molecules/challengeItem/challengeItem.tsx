import { Card, Heading, Text, CategoryTag } from 'ui';
import { ChartBarIcon, StarIcon as StarFill } from '@heroicons/react/20/solid';
import { StarIcon as Star } from '@heroicons/react/24/outline';
import Image from 'next/image';
import type { Challenge } from '../../../types/types';

type TaskItemProps = Challenge;

export const ChallengeItem = ({
	id,
	title,
	image,
	description,
	difficulty,
	tags,
	rating,
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
							className="w-full h-full rounded-lg"
						/>
						<div className="lg:px-5">
							<Heading tag="h2" size="large" className="font-bold	">
								{title}
							</Heading>
							<Text size="medium" variant="default" tag="p" position="left">
								{description}
							</Text>
						</div>
					</div>
					<div className="flex items-center">
						<ChartBarIcon className="h-5 w-5 mr-1" />
						<Text size="medium" variant="default" tag="p" position="left">
							{difficulty}
						</Text>
						<StarFill className="h-5 w-5 ml-3" />
						<StarFill className="h-5 w-5" />
						<StarFill className="h-5 w-5" />
						<Star className="h-5 w-5" />
						<Star className="h-5 w-5" />
						<Text size="medium" variant="default" tag="p">
							{rating}/5
						</Text>
					</div>
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
