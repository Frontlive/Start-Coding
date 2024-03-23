'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';

type DialogProps = {
	trigger: ReactNode;
	title: ReactNode;
	content: ReactNode;
	isOpen: boolean;
	close: () => void;
};

function CustomDialog({ trigger, title, content, close, isOpen }: DialogProps) {
	return (
		<Dialog.Root open={isOpen}>
			<Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay
					className="fixed top-0 left-0 w-screen h-screen bg-black/20"
					onClick={close}
				/>

				<Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white p-2">
					<Dialog.Title>{title}</Dialog.Title>
					<Dialog.Description asChild>{content}</Dialog.Description>
					<Dialog.Close />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export { CustomDialog as Dialog };
