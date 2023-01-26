import { Trigger } from '@radix-ui/react-dropdown-menu';
import { MenuListDropdown } from '../../../icons/menu-list-dropdown';

export const DropdownMenuTrigger = () => {
	return (
		<Trigger className="w-12 h-12">
			<MenuListDropdown />
		</Trigger>
	);
};
