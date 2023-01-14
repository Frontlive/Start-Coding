type CheckboxProps = {
	id: string;
	label: string;
	value: string;
};
export const Checkbox = ({ id, label, value }: CheckboxProps) => {
	return (
		<>
			<div className="flex items-center mb-4">
				<label
					htmlFor={id}
					className="flex items-center px-6 py-2 ml-2 text-sm font-medium text-black cursor-pointer hover:bg-blueGray-200"
				>
					<input
						id={id}
						type="checkbox"
						value={value}
						className="w-4 h-4 mr-2 text-blue-600 cursor-pointer bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>

					<span>{label}</span>
				</label>
			</div>
		</>
	);
};
