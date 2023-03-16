import { Card, Input, Select, Button } from 'ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm, Controller } from 'react-hook-form';
import { FileInput } from 'molecules/fileInput/fileInput';

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
			className="flex w-full flex-col items-center md:justify-start"
		>
			<div className="flex w-full max-w-3xl flex-col gap-4">
				<Card tag="section">
					<div className="flex flex-col gap-3 md:flex-row">
						<div className="min-h-full flex-col items-center rounded-xl border-2 border-purple-700 p-4">
							<FileInput handleChange={handleImgUpload} name="image">
								{!watch('image')
									? 'Dodaj miniaturkę dla zadania'
									: 'Zmień miniaturkę'}
							</FileInput>
						</div>
						<div className="flex w-full flex-col">
							<div className="mb-2 flex flex-col md:mb-0 md:flex-row">
								<div className="mr-2 w-full">
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
