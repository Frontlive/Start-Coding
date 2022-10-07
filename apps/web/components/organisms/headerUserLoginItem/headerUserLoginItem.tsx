import { GenericLink } from 'atoms/genericLink/genericLink';
import UserIcon from 'icons/user-icon.svg';

export const HeaderUserLoginItem = () => {
	return (
		<GenericLink href="/api/auth/login">
			<div className="flex items-center">
				<div className="w-4 h-4 m-2">
					<UserIcon />
				</div>
				<span>Zaloguj się</span>
			</div>
		</GenericLink>
	);
};
