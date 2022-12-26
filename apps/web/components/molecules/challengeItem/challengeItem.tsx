import { Card } from 'atoms/card/card';
import type { Challenge } from '../../../types/types';
import { Link } from 'atoms/link/link';
import Image from 'next/image';
import { Heading } from 'atoms/heading/heading';
import { Text } from 'atoms/text/text';

type ChallengeItemProps = Challenge;

export const ChallengeItem = ({
	image,
	title,
	description,
	difficulty,
	rating,
}: ChallengeItemProps) => {
	return (
		<li>
			<Link
				href="/challenge/id"
				variant="secondary"
				className="block mb-3 hover:scale-105 transition-transform"
			>
				<Card tag="div">
					<div className="flex flex-col lg:flex-row">
						<Image
							src={image}
							alt=""
							width="100"
							height="100"
							className="w-full lg:w-64"
						/>
						<div className="lg:ml-4">
							<Heading tag="h2" size="medium" className="font-bold">
								{title}
							</Heading>
							<Text size="medium" variant="default" tag="p" position="left">
								{description}
							</Text>
							<div className="py-2">
								<Text size="medium" variant="default" tag="p" position="left">
									<span>📶 </span>
									{difficulty}
								</Text>
								<Text size="medium" variant="default" tag="p" position="left">
									<span>⭐️⭐️⭐️⭐️⭐️ </span>
									{rating}/5
								</Text>
							</div>
						</div>
					</div>
				</Card>
			</Link>
		</li>
	);
};
