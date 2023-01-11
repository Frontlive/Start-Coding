import type { ReactNode } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type ProtectedPageProps = {
	children: ReactNode;
};

export const ProtectedPage = ({ children }: ProtectedPageProps) => {
	const { isLoading, user } = useUser();
	const router = useRouter();
	useEffect(() => {
		const redirectToLogin = async () => {
			if (!isLoading && !user) {
				await router.push('/api/auth/login');
			}
		};
		void redirectToLogin();
	}, [isLoading, router, user]);

	if (isLoading || !user) return <div>Loading ...</div>;

	return <>{children}</>;
};
