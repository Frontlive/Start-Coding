import { Portal, Content } from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

type DropdownMenuContentProps = {
	children: ReactNode;
};

export const DropdownMenuContent = ({ children }: DropdownMenuContentProps) => {
	return (
		<Portal>
			<Content className="w-full max-w-xs border-2">{children}</Content>
		</Portal>
	);
};
