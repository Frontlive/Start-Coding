import { DropdownMenuRoot } from '@start/web/components/molecules/dropdownMenuRoot/dropdownMenuRoot';
import { ReactNode } from 'react';
import { DropdownMenuTrigger } from '../../atoms/dropdownMenu/dropdownMenuTrigger/dropdownMenuTrigger';
import { DropdownMenuContent } from '../../atoms/dropdownMenu/dropdownMenuContent/dropdownMenuContent';

type DropdownMenuProps = {
	children: ReactNode;
};

export const DropdownMenu = ({ children }: DropdownMenuProps) => {
	return (
		<DropdownMenuRoot>
			<DropdownMenuTrigger />
			<DropdownMenuContent>{children}</DropdownMenuContent>
		</DropdownMenuRoot>
	);
};
