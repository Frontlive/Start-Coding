import { Item } from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

type DropdownMenuItemProps = {
	children: ReactNode;
};

export const DropdownMenuItem = ({ children }: DropdownMenuItemProps) => {
	return (
		<Item className="cursor-pointer bg-white p-4 hover:bg-gray-100">
			{children}
		</Item>
	);
};
