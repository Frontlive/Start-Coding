import { useId } from 'react';

type CheckboxProps = {
	label: string;
};

export const Checkbox = ({ label }: CheckboxProps) => {
	const id = useId();

	return (
		<div key={id} className="flex items-center">
			<input
				id={id}
				name={id}
				// defaultValue={option.value}
				type="checkbox"
				// defaultChecked={option.checked}
				className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
			/>
			<label htmlFor={id} className="ml-3 min-w-0 flex-1 text-gray-500">
				{label}
			</label>
		</div>
	);
};
