import { Root } from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

type DropdownRootProps = {
	children: ReactNode;
};

export const DropdownMenuRoot = ({ children }: DropdownRootProps) => {
	return <Root>{children}</Root>;
};
