import { PlusIcon } from '@heroicons/react/20/solid';

type AddPhotoProps = {
	onClick: () => void;
};

export const AddPhoto = ({ onClick }: AddPhotoProps) => {
	return (
		<button
			className="max-w-[80px] max-h-[80px] border-2 p-2 rounded-2xl w-full"
			onClick={onClick}
		>
			<PlusIcon />
		</button>
	);
};
