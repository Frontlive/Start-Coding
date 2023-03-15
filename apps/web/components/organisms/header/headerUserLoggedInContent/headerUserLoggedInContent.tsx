import { Divider, DropdownMenu, DropdownMenuItem, GenericLink } from 'ui';
import profileDefaultSvg from 'icons/profile-default.svg';
import { AddNewTaskLink } from 'molecules/challengePage/addNewTaskLink/addNewTaskLink';
import { useRouter } from 'next/router';
import { UserAvatar } from 'molecules/userAvatar/userAvatar';

type HeaderUserLoggedInItemProps = {
	user: {
		avatarSrc: string | null | undefined;
		nickname: string | null | undefined;
	};
};

export const HeaderUserLoggedInContent = ({
	user,
}: HeaderUserLoggedInItemProps) => {
	const router = useRouter();
	const isOnChallengeNewPage = router.pathname.includes('/challenge/new');
	return (
		<div className="flex flex-col lg:flex-row items-center">
			<div className="mr-2">
				{user.avatarSrc ? (
					<UserAvatar avatar={user.avatarSrc} size={10} />
				) : (
					<UserAvatar avatar={profileDefaultSvg} size={10} />
				)}
			</div>
			<p className="p-0 m-0">Witaj, {user.nickname}!</p>
			<DropdownMenu>
				<GenericLink href="/profile">
					<DropdownMenuItem>Profil</DropdownMenuItem>
				</GenericLink>
				<Divider />
				<GenericLink href="/api/auth/logout">
					<DropdownMenuItem>Wyloguj się</DropdownMenuItem>
				</GenericLink>
			</DropdownMenu>
			{!isOnChallengeNewPage && <AddNewTaskLink />}
		</div>
	);
};
