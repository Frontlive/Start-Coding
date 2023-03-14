import { Heading, Link, Text } from 'ui';

export const Error404 = () => {
	return (
		<section className="flex h-[85vh] md:h-[90vh] flex-col justify-center items-center">
			<Heading tag="h2" size="large" className="text-4xl pb-5">
				Error 404
			</Heading>
			<Text size="medium" variant="default" tag="p">
				Podana strona nie istnieje
			</Text>
			<div className="pt-5">
				<Link href="/" variant="primary">
					Wróć na stronę główną
				</Link>
			</div>
		</section>
	);
};
