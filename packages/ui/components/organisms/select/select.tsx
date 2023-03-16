import { Listbox, Transition } from '@headlessui/react';
import { SelectButton } from '../../atoms/select/selectButton/selectButton';
import { SelectOption } from '../../atoms/select/selectOption/selectOption';
import { ErrorMessage } from '../../molecules/errorMessage/errorMessage';

type Option = {
	label: string;
	value: string;
};

type SelectProps = {
	name: string;
	options: Option[];
	label?: string;
	value: string;
	onChange: (val: string) => void;
	isError: boolean;
	errorMessage: string;
	disabled?: boolean;
};

export const Select = ({
	onChange,
	options,
	label,
	value,
	name,
	isError,
	disabled,
	errorMessage,
}: SelectProps) => {
	const selectedOption = options.find(
		(option) => option.value === value,
	)?.label;
	return (
		<Listbox
			name={name}
			as="div"
			value={value}
			onChange={onChange}
			disabled={disabled}
		>
			{({ open }) => (
				<div className="relative z-0">
					<span className="inline-block w-full rounded-md shadow-sm">
						<SelectButton
							disabled={disabled}
							isError={isError}
							label={selectedOption || label || 'Expand select'}
						/>
					</span>
					<div className="fixed rounded-md bg-white">
						<Transition
							show={open}
							leave="transition duration-100 ease-in"
							leaveFrom="transform opacity-100"
							leaveTo="transform opacity-0"
						>
							<Listbox.Options
								static
								className="max-h-56 overflow-auto rounded-md border border-gray-400 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
							>
								{options.map((option) => (
									<SelectOption option={option} key={option.value} />
								))}
							</Listbox.Options>
						</Transition>
					</div>
					<ErrorMessage size="medium" tag="p" position="left">
						{errorMessage}
					</ErrorMessage>
				</div>
			)}
		</Listbox>
	);
};
