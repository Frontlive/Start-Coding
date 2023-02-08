import { GenericLink } from 'ui';

export type Link = {
	name: string;
	href: string;
};

type NavItemProps = {
	link: Link;
};

export const NavLink = ({ link }: NavItemProps) => {
	return (
		<li className="mt-5 lg:mt-0">
			<GenericLink href={link.href}>{link.name}</GenericLink>
		</li>
	);
};
