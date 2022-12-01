import { Item } from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

type DropdownMenuItemProps = {
	children: ReactNode;
};

export const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => {
	return (
		<Item className="p-4 bg-white hover:bg-gray-100 cursor-pointer">
			{children}
		</Item>
	);
};
