import Image from 'next/image';

type PhotoSelectProps = {
	imageSrc: string;
	onPick: () => void;
	selectedImg: string;
};

export const PhotoSelect = ({ onPick, imageSrc }: PhotoSelectProps) => {
	return (
		<button
			onClick={onPick}
			className="max-w-[80px] max-h-[80px] border-2 p-2 rounded-2xl hover:bg-purple-300"
		>
			<Image src={imageSrc} alt="Miniatura" width={100} height={100} />
		</button>
	);
};
