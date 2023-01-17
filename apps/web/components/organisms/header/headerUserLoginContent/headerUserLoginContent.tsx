import { GenericLink } from 'atoms/genericLink/genericLink';
import { ReactComponent as UserIcon } from 'icons/user-icon.svg';

export const HeaderUserLoginContent = () => {
	return (
		<GenericLink href="/api/auth/login">
			<div className="flex items-center gap-2">
				<div className="w-4 h-4">
					<UserIcon />
				</div>
				<span>Zaloguj się</span>
			</div>
		</GenericLink>
	);
};
