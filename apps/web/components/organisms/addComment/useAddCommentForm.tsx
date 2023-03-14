import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useUser } from '@auth0/nextjs-auth0';

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

	const { user } = useUser();

	const addCommentHandler: SubmitHandler<CommentFormValues> = (data) => {
		const currentDate = Date.now();
		const userComment = {
			name: user?.name,
			avatar: user?.picture,
			date: currentDate,
			...data,
		};
		console.log(userComment);
		reset();
	};

	return {
		submitHandler: handleSubmit(addCommentHandler),
		register,
		errors,
	};
};
