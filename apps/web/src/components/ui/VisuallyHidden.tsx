import * as RadixVisuallyHidden from '@radix-ui/react-visually-hidden';
import type { ReactNode } from 'react';

type VisuallyHiddenProps = {
	children: ReactNode;
};

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => (
	<RadixVisuallyHidden.Root>{children}</RadixVisuallyHidden.Root>
);
