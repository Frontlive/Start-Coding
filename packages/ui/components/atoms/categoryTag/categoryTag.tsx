type TagProps = {
	label: string;
};

export const CategoryTag = ({ label }: TagProps) => {
	return (
		<li className="mr-2 mt-3 inline rounded-lg border border-gray-300 bg-gray-100 py-1 px-2">
			{label}
		</li>
	);
};
