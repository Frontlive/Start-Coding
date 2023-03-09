import { useForm } from 'react-hook-form';

type OpinionFormValues = {
	rating: number;
	opinion: string;
};

export const useAddOpinionForm = () => {
	const {
		register,
		formState: { errors },
	} = useForm<OpinionFormValues>({
		defaultValues: {
			rating: 0,
			opinion: '',
		},
	});

	return {
		register,
		errors,
	};
};
