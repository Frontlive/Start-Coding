import { Card } from 'atoms/card/card';

type ChallengeItem = {
	title: string;
	description: string;
	designs: string;
	difficulty: string;
	image: string;
};

type ChallengeItemProps = {
	challenge: ChallengeItem;
};
export const ChallengeItem = ({ challenge }: ChallengeItemProps) => {
	return (
		<a
			href="/challenge/id"
			className="block mb-3 hover:scale-105 transition-transform"
		>
			<Card tag="div">
				<div className="flex flex-row">
					<img src={challenge.image} alt="" width="250px" />
					<div className="ml-4">
						<h2 className="font-bold">{challenge.title}</h2>
						<p>{challenge.description}</p>
						<div className="py-2">
							<p>
								<span>📶 </span>
								{challenge.difficulty}
							</p>
							<p>
								<span>⭐️⭐️⭐️⭐️⭐️ </span>
								4.8/5
								{/*{challenge.rating}*/}
							</p>
						</div>
					</div>
				</div>
			</Card>
		</a>
	);
};
