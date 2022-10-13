import { Trigger } from '@radix-ui/react-dropdown-menu';
import { ReactComponent as MenuListDropdown } from 'icons/menu-list-dropdown.svg';

export const DropdownMenuTrigger = () => {
	return (
		<Trigger className="w-12 h-12">
			<MenuListDropdown />
		</Trigger>
	);
};
