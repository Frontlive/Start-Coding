import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import type { ReactNode } from 'react';

type CustomVisuallyHiddenProps = {
	children: ReactNode;
};

const CustomVisuallyHidden = ({ children }: CustomVisuallyHiddenProps) => (
	<VisuallyHidden.Root>{children}</VisuallyHidden.Root>
);

export { CustomVisuallyHidden as VisuallyHidden };
