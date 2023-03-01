import { Heading, Link, Text } from 'ui';

export const Error404 = () => {
	return (
		<section className="flex flex-col h-full justify-center items-center">
			<Heading tag="h1" size="large" className="text-4xl">
				Error 404
			</Heading>
			<Text size="small" variant="default" tag="p">
				Podana strona nie istnieje
			</Text>
			<Link href="/" variant="primary">
				Wróć na stronę główną
			</Link>
		</section>
	);
};
