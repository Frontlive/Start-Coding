import { Listbox } from '@headlessui/react';
import { Selector } from '../icons/selector';
import clsx from 'clsx';

type SelectButtonProps = {
	label: string;
	isError: boolean;
	disabled?: boolean;
};

export const SelectButton = ({
	label,
	isError,
	disabled,
}: SelectButtonProps) => {
	const cl = clsx(
		'text-sm text-gray-500 cursor-default relative w-full rounded-md border bg-white px-2.5 pb-2.5 pt-4 text-left transition ease-in-out duration-150',
		{
			'border-primary': !isError,
			'border-sky-600': !disabled,
			'border-red-600': isError,
			'text-gray-200 border-gray-200 cursor-not-allowed': disabled,
		},
	);
	return (
		<Listbox.Button className={cl}>
			<span className="block truncate text-black">{label}</span>
			<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
				<Selector />
			</span>
		</Listbox.Button>
	);
};
