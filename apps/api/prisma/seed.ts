import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

faker.setLocale('pl');

const main = async () => {
	await Promise.all([prisma.task.deleteMany(), prisma.user.deleteMany()]);

	await prisma.user.createMany({
		data: Array.from({ length: 5 }, () => {
			const name = faker.name.firstName();
			return {
				email: faker.internet.email(name),
				name,
				nickname: faker.internet.userName(name),
				picture: faker.image.avatar(),
				provider_user_id: faker.datatype.uuid(),
			};
		}),
	});

	const users = await prisma.user.findMany();

	await prisma.task.createMany({
		data: Array.from({ length: 100 }, () => ({
			title: faker.random.words(3),
			description: faker.lorem.paragraphs(1),
			difficulty: faker.helpers.arrayElement([
				'BEGINNER',
				'INTERMEDIATE',
				'ADVANCED',
			]),
			rating: faker.datatype.number({ min: 0, max: 5 }),
			status: faker.helpers.arrayElement(['IN_REVIEW', 'ACTIVE']),
			thumbnail_url: faker.image.imageUrl(),
			author_id: faker.helpers.arrayElement(users).id,
		})),
	});
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
