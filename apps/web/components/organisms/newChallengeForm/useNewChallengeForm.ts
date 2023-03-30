import { SubmitHandler, useForm } from 'react-hook-form';

type ChallengeFormValues = {
	title: string;
	description: string;
	designs: string;
	difficulty: string;
	images: Image[];
};

export type Image = {
	previewUrl: string;
	file: File;
};

export const useNewChallengeForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		watch,
		getValues,
	} = useForm<ChallengeFormValues>({
		defaultValues: {
			title: '',
			description: '',
			designs: '',
			difficulty: '',
			images: [],
		},
	});

	const handleImgUpload = (images: Image[]) => {
		console.log(images);
		const localImages = getValues('images');
		setValue('images', [...images, ...localImages]);
	};

	const onFormSubmit: SubmitHandler<ChallengeFormValues> = (data) => {
		console.log(data);
	};

	const getImagesSrc = () => {
		return watch('images').map((image) => image.previewUrl);
	};

	return {
		register,
		handleSubmit,
		control,
		errors,
		onFormSubmit,
		handleImgUpload,
		imagesSrc: getImagesSrc(),
	};
};
