import { Card, Heading, VisuallyHidden } from 'ui';
import { type ReactNode, useId } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type ModalProps = {
	title: string;
	children: ReactNode;
	isOpen: boolean;
	closeHandler: () => void;
};

export const Modal = ({
	title,
	children,
	isOpen,
	closeHandler,
}: ModalProps) => {
	const id = useId();
	const onClickHandler = () => {
		closeHandler();
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div
			id={id}
			className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-white/80"
			role="modal"
			aria-modal
			aria-labelledby={`${id}-title`}
		>
			<div
				onClick={onClickHandler}
				className="absolute top-0 left-0 z-10 h-full w-full"
			></div>
			<div className="z-40 mx-auto w-11/12 max-w-7xl bg-white">
				<Card tag="div">
					<div className="flex flex-col items-center justify-between border-b border-gray-200 pt-3 pb-6 md:flex-row">
						<Heading
							tag="h2"
							size="large"
							className="order-2 text-center text-4xl font-bold tracking-tight text-gray-900 md:order-1 md:pr-20 md:text-left"
							id={`${id}-title`}
						>
							{title}
						</Heading>
						<button
							className="absolute top-4 right-4 h-8 w-8"
							onClick={onClickHandler}
						>
							<XMarkIcon />
							<VisuallyHidden>zamknij modal</VisuallyHidden>
						</button>
					</div>
					{children}
				</Card>
			</div>
		</div>
	);
};
