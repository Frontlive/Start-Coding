import { useForm } from 'react-hook-form';

type SolutionFormValues = {
	deployment: string;
	sourceCode: string;
	comments: string;
};

export const useSolutionForm = () => {
	const {
		register,
		formState: { errors },
	} = useForm<SolutionFormValues>({
		defaultValues: {
			deployment: '',
			sourceCode: '',
			comments: '',
		},
	});

	return {
		register,
		errors,
	};
};
