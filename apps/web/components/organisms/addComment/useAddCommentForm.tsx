import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

type CommentFormValues = {
	comment: string;
};

export const useAddCommentForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<CommentFormValues>({
		defaultValues: {
			comment: '',
		},
	});

	const addCommentHandler: SubmitHandler<CommentFormValues> = (data) => {
		try {
			console.log(data);
			toast.success('Pomyślnie dodano komentarz');
			reset();
		} catch (e) {
			toast.error('Wystąpił błąd podczas dodawania komentarza');
		}
	};

	return {
		submitHandler: handleSubmit(addCommentHandler),
		register,
		errors,
	};
};
