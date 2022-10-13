import { DropdownMenu } from 'organisms/dropdownMenu/dropdownMenu';
import { GenericLink } from 'atoms/genericLink/genericLink';
import { DropdownMenuItem } from 'atoms/dropdownMenuItem/dropdownMenuItem';
import { Divider } from 'atoms/divider/divider';
import profileDefaultSvg from 'icons/profile-default.svg';
import { Link } from 'atoms/link/link';
import Image from 'next/future/image';

type HeaderUserLoggedInItemProps = {
	user: {
		avatarSrc: string | null | undefined;
		nickname: string | null | undefined;
	};
};

export const HeaderUserLoggedInItem = ({
	user,
}: HeaderUserLoggedInItemProps) => {
	return (
		<div className="flex items-center">
			<div className="h-10 w-10 mr-2">
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
			<Link href="/add/challenge" variant="primary">
				Dodaj zadanie
			</Link>
		</div>
	);
};
