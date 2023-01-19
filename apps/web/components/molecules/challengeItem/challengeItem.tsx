import { Card } from 'atoms/card/card';
import { Heading } from 'atoms/heading/heading';
import { Text } from 'atoms/text/text';
import Image from 'next/image';
import type { Challenge } from '../../../types/types';

type TaskItemProps = Challenge;

export const ChallengeItem = ({
	id,
	title,
	image,
	description,
}: TaskItemProps) => {
	return (
		<li className="mb-5">
			<a href={`/challenge/${id}`}>
				<Card tag="div">
					<div className="flex flex-col lg:flex-row">
						<Image src={image} alt="" width="100" height="100" />
						<div className="lg:px-5">
							<Heading tag="h2" size="large">
								{title}
							</Heading>
							<Text size="medium" variant="default" tag="p" position="left">
								{description}
							</Text>
						</div>
					</div>
				</Card>
			</a>
		</li>
	);
};
