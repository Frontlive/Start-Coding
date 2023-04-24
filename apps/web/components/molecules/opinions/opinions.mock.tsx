import type { Opinion } from '../../../types/types';

export const opinions: Opinion[] = [
	{
		id: '1',
		author: {
			id: '1',
			name: 'Adam Nowak',
			avatar_URL:
				'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		},
		rating: 5,
		comment:
			'Zadanie programistyczne, które otrzymałem, było dobrze sformułowane i precyzyjnie opisywało wymagania dotyczące tworzenia aplikacji internetowej. Zadanie miało na celu zaimplementowanie funkcjonalności wyszukiwania produktów w bazie danych i wyświetlenia wyników na stronie internetowej.',
	},
	{
		id: '2',
		author: {
			id: '2',
			name: 'Maria Wójcik',
			avatar_URL:
				'https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		},
		rating: 5,
		comment:
			'Zadanie programistyczne, które otrzymałem, było dobrze sformułowane i precyzyjnie opisywało wymagania dotyczące tworzenia aplikacji internetowej. Zadanie miało na celu zaimplementowanie funkcjonalności wyszukiwania produktów w bazie danych i wyświetlenia wyników na stronie internetowej.',
	},
	{
		id: '3',
		author: {
			id: '3',
			name: 'Piotr Kowalczyk',
			avatar_URL:
				'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		},
		rating: 4,
		comment:
			'Zadanie programistyczne, które otrzymałem, było dobrze sformułowane i precyzyjnie opisywało wymagania dotyczące tworzenia aplikacji internetowej. Zadanie miało na celu zaimplementowanie funkcjonalności wyszukiwania produktów w bazie danych i wyświetlenia wyników na stronie internetowej.',
	},
];
