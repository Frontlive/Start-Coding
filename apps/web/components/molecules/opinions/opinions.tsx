import { OpinionItem } from 'molecules/opinionItem/opinionItem';
import { AddOpinion } from 'organisms/addOpinion/addOpinion';
import { OpinionStats } from 'molecules/opinonStats/opinionStats';
import { ProtectedComponent } from 'organisms/protectedComponent/protectedComponent';
import { opinions } from 'molecules/opinions/opinions.mock';

export const Opinions = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row">
				<div className="p-2 w-full md:w-1/2">
					<ProtectedComponent info="Zaloguj się aby dodać opinię.">
						<AddOpinion />
					</ProtectedComponent>
				</div>
				<OpinionStats opinions={opinions} />
			</div>
			{opinions.map((opinion, id) => (
				<OpinionItem key={id} {...opinion} />
			))}
		</>
	);
};
