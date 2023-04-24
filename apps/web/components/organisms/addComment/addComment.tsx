import { useAddCommentForm } from 'organisms/addComment/useAddCommentForm';
import { Button, TextArea } from 'ui';

export const AddComment = () => {
	const { submitHandler, register, errors } = useAddCommentForm();

	return (
		<form onSubmit={submitHandler}>
			<TextArea
				{...register('comment', { required: 'To pole jest wymagane' })}
				isError={Boolean(errors.comment)}
				label="Twój komentarz"
				errorMessage={errors.comment?.message || ''}
			/>
			<div className="pt-2 flex">
				<div className="w-2/3 hidden md:block"></div>
				<div className="w-full md:w-1/3 self-end">
					<Button variant="primary" type="submit" fullWidth={true}>
						Dodaj komentarz
					</Button>
				</div>
			</div>
		</form>
	);
};
