import { ReactNode } from 'react';
import cx from 'clsx';

type LabelProps = {
	children: ReactNode;
	id: string;
	label: string;
	disabled?: boolean;
};

export const Label = ({ children, id, label, disabled }: LabelProps) => {
	const className = cx(
		'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
		{
			'text-gray-200 cursor-not-allowed': disabled,
		},
	);
	return (
		<div className="flex flex-col relative">
			{children}
			<label className={className} htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
