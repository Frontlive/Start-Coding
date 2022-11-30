import { Label } from 'atoms/label/label';
import { ErrorMessage } from 'molecules/errorMessage/errorMessage';
import { ChangeEvent, forwardRef, TextareaHTMLAttributes, useId } from 'react';
import cx from 'clsx';

type TextAreaProps = {
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	type?: 'text' | 'number';
	isError: boolean;
	label: string;
	errorMessage: string;
	disabled?: boolean;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ onChange, isError, label, errorMessage, disabled, ...rest }, ref) => {
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
					<textarea
						id={id}
						className={className}
						onChange={onChange}
						placeholder=" "
						disabled={disabled}
						ref={ref}
						{...rest}
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
	},
);

TextArea.displayName = 'TextArea';
