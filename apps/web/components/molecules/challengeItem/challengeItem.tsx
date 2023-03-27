import { Card, Heading, Text } from 'ui';
import { ChartBarIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import clsx from 'clsx';
import type { Task } from 'generated';

type TaskItemProps = Task;

const translateToPolish = (difficulty: string) => {
	switch (difficulty) {
		case 'ADVANCED':
			return 'Zaawansowany';
		case 'BEGINNER':
			return 'Początkujący';
		case 'INTERMEDIATE':
			return 'Mid';
	}
};
export const ChallengeItem = ({
	id,
	title,
	thumbnailUrl: image,
	description,
	difficulty,
	// tags,
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
							width="1000"
							height="1000"
							className="w-full h-full rounded-lg md:w-1/3"
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
							{translateToPolish(difficulty)}
						</Text>
						<div className="flex items-center">
							{Array.from({ length: 5 }, (_, i) => {
								const starClass =
									i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300';
								return (
									<svg
										aria-hidden="true"
										className={clsx('w-5 h-5', starClass)}
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										key={i}
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								);
							})}
						</div>

						<Text size="medium" variant="default" tag="p">
							{rating}/5
						</Text>
					</div>
					<ul className="flex flex-wrap">
						{/*{tags.map((tag) => {*/}
						{/*	return <CategoryTag key={tag} label={tag} />;*/}
						{/*})}*/}
					</ul>
				</Card>
			</a>
		</li>
	);
};
