import { OpinionItem } from 'molecules/opinionItem/opinionItem';
import type { Opinion } from '../../../types/types';
import { NewOpinionForm } from 'organisms/newOpinionForm/newOpinionForm';
import { OpinionStats } from 'molecules/opinonStats/opinionStats';
import { ProtectedComponent } from 'organisms/protectedComponent/protectedComponent';

const opinions: Opinion[] = [
	{
		author: 'Jan Kowalski',
		avatar:
			'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		rating: 5,
		comment:
			'Zadanie programistyczne, które otrzymałem, było dobrze sformułowane i precyzyjnie opisywało wymagania dotyczące tworzenia aplikacji internetowej. Zadanie miało na celu zaimplementowanie funkcjonalności wyszukiwania produktów w bazie danych i wyświetlenia wyników na stronie internetowej.',
	},
	{
		author: 'Jan Kowalski',
		avatar:
			'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		rating: 5,
		comment:
			'Zadanie programistyczne, które otrzymałem, było dobrze sformułowane i precyzyjnie opisywało wymagania dotyczące tworzenia aplikacji internetowej. Zadanie miało na celu zaimplementowanie funkcjonalności wyszukiwania produktów w bazie danych i wyświetlenia wyników na stronie internetowej.',
	},
	{
		author: 'Jan Kowalski',
		avatar:
			'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		rating: 4,
		comment:
			'Zadanie programistyczne, które otrzymałem, było dobrze sformułowane i precyzyjnie opisywało wymagania dotyczące tworzenia aplikacji internetowej. Zadanie miało na celu zaimplementowanie funkcjonalności wyszukiwania produktów w bazie danych i wyświetlenia wyników na stronie internetowej.',
	},
];

export const Opinions = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row">
				<div className="p-2 w-full md:w-1/2">
					<ProtectedComponent info="Zaloguj się aby dodać opinię.">
						<NewOpinionForm />
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
