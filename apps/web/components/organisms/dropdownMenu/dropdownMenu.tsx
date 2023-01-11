import { DropdownMenuRoot } from 'molecules/dropdownMenuRoot/dropdownMenuRoot';
import { DropdownMenuTrigger } from 'atoms/dropdownMenu/dropdownMenuTrigger/dropdownMenuTrigger';
import { DropdownMenuContent } from 'atoms/dropdownMenu/dropdownMenuContent/dropdownMenuContent';
import { ReactNode } from 'react';

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
