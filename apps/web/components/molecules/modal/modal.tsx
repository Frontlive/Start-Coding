import { Card, Heading } from 'ui';
import { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type ModalProps = {
	title: string;
	children: ReactNode;
	closeHandler: () => void;
};

export const Modal = ({ title, children, closeHandler }: ModalProps) => {
	const onClickHandler = () => {
		closeHandler();
	};

	return (
		<div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-white/80 z-20">
			<div
				onClick={onClickHandler}
				className="w-full h-full absolute top-0 left-0 z-10"
			></div>
			<div className="bg-white z-40">
				<Card tag="div">
					<div className="flex items-center justify-between border-b border-gray-200 pt-3 pb-6">
						<Heading
							tag="h1"
							size="large"
							className="text-4xl font-bold tracking-tight text-gray-900 pr-32"
						>
							{title}
						</Heading>
						<button className="w-[35px] h-[35px]" onClick={onClickHandler}>
							<XMarkIcon />
						</button>
					</div>
					{children}
				</Card>
			</div>
		</div>
	);
};
