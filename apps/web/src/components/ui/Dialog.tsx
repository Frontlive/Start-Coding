'use client';

import * as RadixDialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';

type DialogRootProps = {
	isOpen: boolean;
	children: ReactNode;
};

export const DialogRoot = ({ isOpen, children }: DialogRootProps) => {
	return <RadixDialog.Root open={isOpen}>{children}</RadixDialog.Root>;
};

type DialogTriggerProps = {
	children: ReactNode;
};

export const DialogTrigger = ({ children }: DialogTriggerProps) => {
	return <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>;
};

type DialogContentProps = {
	children: ReactNode;
};

export const DialogContent = ({ children }: DialogContentProps) => {
	return (
		<RadixDialog.Portal>
			<RadixDialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-black/20" />

			<RadixDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white p-2">
				{children}
			</RadixDialog.Content>
		</RadixDialog.Portal>
	);
};

type DialogTitleProps = {
	children: ReactNode;
};

export const DialogTitle = ({ children }: DialogTitleProps) => {
	return <RadixDialog.Title>{children}</RadixDialog.Title>;
};

type DialogDescriptionProps = {
	children: ReactNode;
};

export const DialogDescription = ({ children }: DialogDescriptionProps) => {
	return <RadixDialog.Description asChild>{children}</RadixDialog.Description>;
};
