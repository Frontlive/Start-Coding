import { GenericLink } from 'ui';
import { ReactComponent as UserIcon } from 'icons/user-icon.svg';

export const HeaderUserLoginContent = () => {
	return (
		<GenericLink href="/api/auth/login">
			<div className="flex items-center">
				<div className="m-2 h-4 w-4">
					<UserIcon />
				</div>
				<span>Zaloguj się</span>
			</div>
		</GenericLink>
	);
};
