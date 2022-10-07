import { DropdownMenu } from 'organisms/dropdownMenu/dropdownMenu';
import { GenericLink } from 'atoms/genericLink/genericLink';
import { DropdownMenuItem } from 'atoms/dropdownMenuItem/dropdownMenuItem';
import { Divider } from 'atoms/divider/divider';
import ProfileDefault from 'icons/profile-default.svg';

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
					<img
						className="rounded-full border "
						src={user.avatarSrc}
						alt="User Avatar"
					/>
				) : (
					<ProfileDefault />
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
		</div>
	);
};
