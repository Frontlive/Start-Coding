import { GenericLink } from 'atoms/genericLink/genericLink';
import { ReactComponent as UserIcon } from 'icons/user-icon.svg';

export const HeaderUserLoginContent = () => {
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
