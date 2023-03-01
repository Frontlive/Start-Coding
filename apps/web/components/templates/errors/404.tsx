import { Heading, Link, Text } from 'ui';

export const Error404 = () => {
	return (
		<section className="flex flex-col justify-center items-center">
			<Heading tag="h1" size="large">
				Error 404
			</Heading>
			<Text size="medium" variant="default" tag="p">
				Podana strona nie istnieje
			</Text>
			<Link href="/" variant="primary">
				Wróć na stronę główną
			</Link>
		</section>
	);
};
