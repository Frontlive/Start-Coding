type TagProps = {
	label: string;
};

export const CategoryTag = ({ label }: TagProps) => {
	return (
		<li className="inline border border-gray-300 rounded-lg mr-2 mt-3 py-1 px-2 bg-gray-100">
			{label}
		</li>
	);
};
