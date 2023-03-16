import type { Comment } from '../../../types/types';

export const commentsMock: Comment[] = [
	{
		id: '1',
		author: {
			id: '1',
			name: 'Adam Nowak',
			avatar_URL:
				'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		},
		comment:
			'To zadanie frontendowe wydaje się bardzo wymagające, ale na pewno pozwoli na rozwinięcie umiejętności i poszerzenie wiedzy. Trzeba będzie zwrócić uwagę na każdy szczegół, aby stworzyć estetyczny i responsywny interfejs.',
		timestamp: 1264938840000,
	},

	{
		id: '2',
		author: {
			id: '2',
			name: 'Maria Wójcik',
			avatar_URL:
				'https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		},
		comment:
			'Mam nadzieję, że w tym zadaniu będzie można wykorzystać najnowsze technologie i narzędzia, co pozwoli na jeszcze lepsze efekty. Czekam na wyzwania, które pozwolą mi się rozwijać i poszerzać horyzonty.',
		timestamp: 1678794840000,
	},

	{
		id: '3',
		author: {
			id: '3',
			name: 'Piotr Kowalczyk',
			avatar_URL:
				'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		},
		comment:
			'Zadanie frontendowe to wspaniała okazja, aby pokazać swoje umiejętności projektowania interfejsów użytkownika. Nie mogę się doczekać, aby zacząć pracę i zobaczyć, co uda mi się stworzyć.',
		timestamp: 1672444800000,
	},

	{
		id: '4',
		author: {
			id: '4',
			name: 'Karolina Nowakowska',
			avatar_URL:
				'https://images.unsplash.com/photo-1607982863027-0cb6818ee8b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		},
		comment:
			'Zadanie frontendowe może być trudne, ale warto podjąć wyzwanie. Będzie to okazja do nauki nowych technologii i rozwoju umiejętności, co na pewno będzie przydatne w dalszej karierze.',
		timestamp: 1678808591856,
	},
];
