import { Card, Input, Select, Button } from 'ui';
import { Controller } from 'react-hook-form';

import dynamic from 'next/dynamic';
import { useNewChallengeForm } from 'organisms/newChallengeForm/useNewChallengeForm';
import { PhotoManager } from 'organisms/photoManager/photoManager';
import { PhotoSelect } from 'organisms/photosSelect/photoSelect';
import { AddPhoto } from 'organisms/addPhoto/addPhoto';

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

export const NewChallengeForm = () => {
	const {
		handleImgUpload,
		handleSubmit,
		onFormSubmit,
		register,
		errors,
		control,
		imagesSrc,
	} = useNewChallengeForm();
	return (
		<form
			onSubmit={handleSubmit(onFormSubmit)}
			className="flex flex-col items-center md:justify-start w-full"
		>
			<div className="max-w-3xl w-full flex flex-col gap-4">
				<div className="min-h-full border-2 rounded-xl border-purple-700 p-4 flex-col items-center flex">
					<PhotoManager
						handleImgUpload={handleImgUpload}
						imagesSrc={imagesSrc}
					/>
					<div className="flex gap-4 w-full justify-start mt-4">
						{imagesSrc.map((imageSrc) => (
							<PhotoSelect
								imageSrc={imageSrc}
								selectedImg=""
								key={imageSrc}
								onPick={() => {
									console.log('picked');
								}}
							/>
						))}
						<AddPhoto
							onClick={() => {
								console.log('added');
							}}
						/>
					</div>
				</div>

				<Card tag="section">
					<div className="flex gap-3 flex-col md:flex-row">
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
						</div>
					</div>
				</Card>
				<Controller
					control={control}
					render={({ field: { onChange, value } }) => {
						return (
							<Editor
								onChange={onChange}
								value={value}
								placeholder="Opisz projekt"
							/>
						);
					}}
					name="description"
				/>
				<Button variant="primary" type="submit" fullWidth>
					Dodaj zadanie
				</Button>
			</div>
		</form>
	);
};
