import { Heading, Link, Text } from 'ui';

export const Error404 = () => {
	return (
		<section className="flex h-[85vh] flex-col items-center justify-center md:h-[90vh]">
			<Heading tag="h2" size="large" className="pb-5 text-4xl">
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
