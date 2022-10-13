import cx from 'clsx';
import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { Label } from 'atoms/label/label';
import { ErrorMessage } from 'molecules/errorMessage/errorMessage';
import { useId } from 'react';

type InputProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	type: 'text' | 'number';
	isError: boolean;
	label: string;
	errorMessage: string;
	disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
	onChange,
	value,
	label,
	isError,
	errorMessage,
	disabled,
}: InputProps) => {
	const id = useId();
	const className = cx(
		'border  block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer',
		{
			'border-sky-600': !disabled,
			'border-red-600': isError,
			'border-gray-200 cursor-not-allowed': disabled,
		},
	);
	return (
		<div className="relative">
			<Label id={id} label={label} disabled={disabled}>
				<input
					type="text"
					id={id}
					className={className}
					onChange={onChange}
					value={value}
					placeholder=" "
					disabled={disabled}
				/>
			</Label>
			{isError && (
				<span className="mt-2">
					<ErrorMessage size="small" tag="p">
						{errorMessage}
					</ErrorMessage>
				</span>
			)}
		</div>
	);
};
