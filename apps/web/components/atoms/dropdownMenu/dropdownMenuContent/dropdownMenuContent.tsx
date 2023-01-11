import { Portal, Content } from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

type DropdownMenuContentProps = {
	children: ReactNode;
};

export const DropdownMenuContent = ({ children }: DropdownMenuContentProps) => {
	return (
		<Portal>
			<Content className="border-2 max-w-xs w-full">{children}</Content>
		</Portal>
	);
};
