import { Button, Card, Heading } from 'ui';
import { useAddOpinionForm } from 'organisms/newOpinionForm/useAddOpinionForm';
import { TextArea } from 'ui/components/organisms/textArea/textArea';
import { ReactComponent as StarIcon } from 'components/icons/gray-star.svg';

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
							<div className="w-10 h-10 m-2">
								<StarIcon />
							</div>
							<div className="w-10 h-10">
								<StarIcon />
							</div>
							<div className="w-10 h-10">
								<StarIcon />
							</div>
							<div className="w-10 h-10">
								<StarIcon />
							</div>
							<div className="w-10 h-10">
								<StarIcon />
							</div>
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
