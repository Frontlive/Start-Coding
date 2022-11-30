import { Card } from 'atoms/card/card';
import { Input } from 'molecules/input/input';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button } from 'atoms/button/button';
import { FileInput } from 'molecules/fileInput/fileInput';
import { Select } from 'molecules/select/select';
import dynamic from 'next/dynamic';

const Editor = dynamic(
	() => import('molecules/editor/editor').then((component) => component.Editor),
	{
		ssr: false,
	},
);

type Difficulty = {
	label: string;
	value: string;
};
type Difficulties = Difficulty[];

const difficulties: Difficulties = [
	{
		label: 'początkujący',
		value: 'beginner',
	},
	{
		label: 'srednio-zaawansowany',
		value: 'semi-advanced',
	},
	{
		label: 'zaawansowany',
		value: 'advanced',
	},
];

type ChallengeFormValues = {
	title: string;
	description: string;
	designs: string;
	difficulty: string;
	image: string;
};

export const NewChallengeForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		watch,
	} = useForm<ChallengeFormValues>({
		defaultValues: {
			title: '',
			description: 'Opisz projekt',
			designs: '',
			difficulty: '',
			image: '',
		},
	});

	const handleImgUpload = (imgSrc: string[]) => {
		console.log(imgSrc);
		setValue('image', imgSrc[0]);
	};

	const onFormSubmit: SubmitHandler<ChallengeFormValues> = (data) => {
		console.log(data);
	};
	return (
		<form
			onSubmit={handleSubmit(onFormSubmit)}
			className="flex flex-col items-center md:justify-start w-full"
		>
			<div className="max-w-3xl w-full flex flex-col gap-4">
				<Card tag="section">
					<div className="flex gap-3 flex-col md:flex-row">
						<div className="min-h-full border-2 rounded-xl border-purple-700 p-4 flex-col items-center">
							<FileInput handleChange={handleImgUpload} name="image">
								{!watch('image')
									? 'Dodaj miniaturkę dla zadania'
									: 'Zmień miniaturkę'}
							</FileInput>
						</div>
						<div className="flex flex-col w-full">
							<div className="flex flex-col mb-2 md:mb-0 md:flex-row">
								<div className="w-full mr-2">
									<fieldset className="mb-4">
										<Input
											{...register('title')}
											type="text"
											isError={Boolean(errors.title)}
											label="Tytuł"
											errorMessage={errors.title?.message || ''}
										/>
									</fieldset>
									<fieldset className="mb-4">
										<Input
											{...register('designs')}
											type="text"
											isError={Boolean(errors.title)}
											label="Link do designów"
											errorMessage={errors.title?.message || ''}
										/>
									</fieldset>
								</div>
								<div className="w-full">
									<Controller
										name="difficulty"
										control={control}
										render={({ field: { onChange, value } }) => (
											<Select
												name="difficulty"
												options={difficulties}
												value={value}
												onChange={onChange}
												isError={Boolean(errors.difficulty?.message)}
												errorMessage={errors.difficulty?.message || ''}
												label="Wybierz poziom trudności"
											/>
										)}
									/>
								</div>
							</div>

							<Button variant="primary" type="submit" fullWidth>
								Dodaj zadanie
							</Button>
						</div>
					</div>
				</Card>
				<Card tag="section">
					<Controller
						control={control}
						render={({ field: { onChange } }) => {
							return <Editor onChange={onChange} />;
						}}
						name="description"
					/>
				</Card>
			</div>
		</form>
	);
};
