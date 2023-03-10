import { Heading } from 'ui';
import { ProtectedComponent } from 'organisms/protectedComponent/protectedComponent';
import { AddComment } from 'organisms/addComment/addComment';
import { CommentItem } from 'molecules/commentItem/commentItem';

const comments = [
	{
		author: 'Adam Nowak',
		comment:
			'To zadanie frontendowe wydaje się bardzo wymagające, ale na pewno pozwoli na rozwinięcie umiejętności i poszerzenie wiedzy. Trzeba będzie zwrócić uwagę na każdy szczegół, aby stworzyć estetyczny i responsywny interfejs.',
		avatar:
			'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		date: '2021-10-10',
	},

	{
		author: 'Maria Wójcik',
		comment:
			'Mam nadzieję, że w tym zadaniu będzie można wykorzystać najnowsze technologie i narzędzia, co pozwoli na jeszcze lepsze efekty. Czekam na wyzwania, które pozwolą mi się rozwijać i poszerzać horyzonty.',
		avatar:
			'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		date: '2021-10-10',
	},

	{
		author: 'Piotr Kowalczyk',
		comment:
			'Zadanie frontendowe to wspaniała okazja, aby pokazać swoje umiejętności projektowania interfejsów użytkownika. Nie mogę się doczekać, aby zacząć pracę i zobaczyć, co uda mi się stworzyć.',
		avatar:
			'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		date: '2021-10-10',
	},

	{
		author: 'Karolina Nowakowska',
		comment:
			'Zadanie frontendowe może być trudne, ale warto podjąć wyzwanie. Będzie to okazja do nauki nowych technologii i rozwoju umiejętności, co na pewno będzie przydatne w dalszej karierze.',
		avatar:
			'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
		date: '2021-10-10',
	},
];

export const Comments = () => {
	return (
		<div>
			<div className="flex-col w-full py-2 mx-auto bg-white sm:px-4 md:px-4 md:w-2/3">
				<div className="pb-2">
					<Heading tag="h3" size="medium">
						Komentarze ({comments.length})
					</Heading>
				</div>
				<ProtectedComponent info="Aby dodać komentarz musisz być zalogowany">
					<AddComment />
				</ProtectedComponent>
			</div>
			{comments.map((comment, id) => (
				<CommentItem {...comment} key={id} />
			))}
		</div>
	);
};
