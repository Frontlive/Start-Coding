import { Card } from 'atoms/card/card';
import { Input } from 'molecules/input/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'atoms/button/button';
import { FileInput } from 'atoms/fileInput/fileInput';
import { useFileInput } from 'atoms/fileInput/useFileInput';
import { Text } from 'atoms/text/text';
import { ImgPreview } from 'atoms/imgPreview/imgPreview';

type ChallengeFormValues = {
	title: string;
};

export const NewChallengeForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ChallengeFormValues>({
		defaultValues: {
			title: '',
		},
	});

	const onFormSubmit: SubmitHandler<ChallengeFormValues> = (data) => {
		console.log(data);
	};

	const { handleChange, filesSrc } = useFileInput();
	return (
		<form
			onSubmit={handleSubmit(onFormSubmit)}
			className="flex flex-col items-start md:justify-between md:flex-row w-full"
		>
			<div className="max-w-sm w-full">
				<Card tag="section">
					<FileInput handleChange={handleChange}>
						<Text variant="default" tag="p" size="medium">
							Dodaj zdjęcia dla zadania
						</Text>
					</FileInput>
					{filesSrc.map((src, index) => (
						<ImgPreview
							key={src}
							src={src}
							width={100}
							height={100}
							size="small"
							alt={`Miniaturka do zadania nr: ${index}`}
						/>
					))}
				</Card>
			</div>
			<div className="max-w-sm w-full mt-4 md:mt-0 md:mx-6">
				<Card tag="section">
					<div className="flex-col">
						<Input
							{...register('title')}
							type="text"
							isError={Boolean(errors.title)}
							label="Tytuł zadania"
							errorMessage={errors.title?.message || ''}
						/>
					</div>
				</Card>
			</div>
			<div className="max-w-sm w-full mt-4 md:mt-0">
				<Card tag="section">
					<div className="flex-col">
						<Button variant="primary" type="submit" fullWidth>
							Dodaj zadanie
						</Button>
					</div>
				</Card>
			</div>
		</form>
	);
};
