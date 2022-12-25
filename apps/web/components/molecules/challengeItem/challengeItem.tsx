import { Card } from 'atoms/card/card';
import { Challenge } from '../../../types/types';

type ChallengeItemProps = {
	challenge: Challenge;
};
export const ChallengeItem = ({ challenge }: ChallengeItemProps) => {
	return (
		<li>
			<a
				href="/challenge/id"
				className="block mb-3 hover:scale-105 transition-transform"
			>
				<Card tag="div">
					<div className="flex flex-col lg:flex-row">
						<img src={challenge.image} alt="" className="w-full lg:w-64" />
						<div className="lg:ml-4">
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
		</li>
	);
};
