import { useAddCommentForm } from 'organisms/addComment/useAddCommentForm';
import { TextArea } from 'ui/components/organisms/textArea/textArea';
import { Button } from 'ui';

export const AddComment = () => {
	const { register, errors } = useAddCommentForm();

	return (
		<form>
			<TextArea
				{...register('comment')}
				isError={Boolean(errors.comment)}
				label="Twój komentarz"
				errorMessage={errors.comment?.message || ''}
			/>
			<div className="pt-2">
				<Button variant="primary" type="submit">
					Dodaj komentarz
				</Button>
			</div>
		</form>
	);
};
