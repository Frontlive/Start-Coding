import { useForm } from 'react-hook-form';

type CommnetFormValues = {
	comment: string;
};

export const useAddCommentForm = () => {
	const {
		register,
		formState: { errors },
	} = useForm<CommnetFormValues>({
		defaultValues: {
			comment: '',
		},
	});

	return {
		register,
		errors,
	};
};
