import { Listbox } from '@headlessui/react';
import { Fragment } from 'react';
import clsx from 'clsx';
import { Selected } from 'atoms/select/icons/selected';

type Option = {
	value: string;
	label: string;
};

type SelectOptionProps = {
	option: Option;
};

export const SelectOption = ({ option }: SelectOptionProps) => {
	return (
		<Listbox.Option as={Fragment} value={option.value}>
			{({ active, selected }) => (
				<li
					className={clsx(
						'cursor-default select-none relative py-2 pl-3 pr-9 rounded-md',
						{
							'text-white bg-primary': active,
							'text-gray-900': !active,
						},
					)}
				>
					<div className="flex items-center">
						<span
							className={clsx('flex items-center block truncate', {
								'font-semibold': selected,
								'font-normal': !selected,
							})}
						>
							{option.label}
						</span>
						{selected && (
							<span
								className={clsx(
									'absolute inset-y-0 right-0 flex items-center mr-3 pl-1.5',
									{
										'text-white': active,
										'text-indigo-600': !active,
									},
								)}
							>
								<Selected />
							</span>
						)}
					</div>
				</li>
			)}
		</Listbox.Option>
	);
};
