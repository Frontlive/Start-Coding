import { Text } from 'atoms/text/text';
import { Checkbox } from 'atoms/checkbox/checkbox';

type categoryOption = string;

type FilterCategoryProps = {
	categoryName: string;
	categoryOptions: categoryOption[];
};
export const FilterCategory = ({
	categoryName,
	categoryOptions,
}: FilterCategoryProps) => {
	return (
		<>
			<Text size="large" variant="default" position="left" tag="p">
				{categoryName}
			</Text>
			{categoryOptions.map((option) => (
				<Checkbox key={option} label={option} id={option} value={option} />
			))}
		</>
	);
};
