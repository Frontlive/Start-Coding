import { useUser } from '@auth0/nextjs-auth0';

export const Homepage = () => {
	const { isLoading, user, error } = useUser();
	if (isLoading) return <span>Loading</span>;
	if (error) return <span>Error</span>;
	console.log(user);
	if (user) {
		return (
			<header>
				<a href="/api/auth/logout">Logout</a>
			</header>
		);
	}
	return (
		<header>
			<a href="/api/auth/login">Login</a>
		</header>
	);
};
