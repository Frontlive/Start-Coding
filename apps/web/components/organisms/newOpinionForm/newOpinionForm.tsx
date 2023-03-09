import { Button, Card, Heading } from 'ui';
import clsx from 'clsx';
import { useAddOpinionForm } from 'organisms/newOpinionForm/useAddOpinionForm';
import { TextArea } from 'ui/components/organisms/textArea/textArea';

export const NewOpinionForm = () => {
	const { register, errors } = useAddOpinionForm();

	return (
		<Card tag="div">
			<div className="flex flex-col">
				<Heading tag="h3" size="large" className="font-bold">
					Dodaj opinię o zadaniu
				</Heading>
				<form>
					<div className="pt-3">
						<TextArea
							{...register('opinion')}
							isError={Boolean(errors.opinion)}
							label="Twoja opinia"
							errorMessage={errors.opinion?.message || ''}
						/>
					</div>
					<div className="flex flex-col md:flex-row justify-between items-center pt-5">
						<div className="flex justify-center items-center">
							<svg
								aria-hidden="true"
								className={clsx('w-10 h-10 text-gray-300')}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>First star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								aria-hidden="true"
								className={clsx('w-10 h-10 text-gray-300')}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>First star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								aria-hidden="true"
								className={clsx('w-10 h-10 text-gray-300')}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>First star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								aria-hidden="true"
								className={clsx('w-10 h-10 text-gray-300')}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>First star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<svg
								aria-hidden="true"
								className={clsx('w-10 h-10 text-gray-300')}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>First star</title>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
						</div>
						<div className="md:w-1/2 flex items-center justify-center">
							<Button variant="primary" fullWidth={true} type="submit">
								Prześlij opinię
							</Button>
						</div>
					</div>
				</form>
			</div>
		</Card>
	);
};
