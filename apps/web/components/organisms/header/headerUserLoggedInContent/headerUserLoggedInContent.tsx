import { DropdownMenu, Divider, DropdownMenuItem, GenericLink } from 'ui';
import profileDefaultSvg from 'icons/profile-default.svg';
import Image from 'next/image';
import { AddNewTaskLink } from 'molecules/challengePage/addNewTaskLink/addNewTaskLink';
import { useRouter } from 'next/router';

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
			<div className="h-10 w-10 mr-2 ">
				{user.avatarSrc ? (
					<Image
						className="rounded-full border"
						src={user.avatarSrc}
						alt="User Avatar"
						width={100}
						height={100}
					/>
				) : (
					<Image
						className="rounded-full border"
						src={profileDefaultSvg}
						alt="default user avatar"
						height={100}
						width={100}
					/>
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
