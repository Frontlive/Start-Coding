import { GenericLink } from '../../atoms/genericLink/genericLink';

export type Link = {
	name: string;
	href: string;
};

type NavItemProps = {
	link: Link;
};

export const NavLink = ({ link }: NavItemProps) => {
	return (
		<li>
			<GenericLink href={link.href}>{link.name}</GenericLink>
		</li>
	);
};
