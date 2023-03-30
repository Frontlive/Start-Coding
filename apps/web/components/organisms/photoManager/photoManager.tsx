import { FileInput } from 'molecules/fileInput/fileInput';
import NextImage from 'next/image';
import type { Image } from '../newChallengeForm/useNewChallengeForm';

type PhotoManagerProps = {
	handleImgUpload: (images: Image[]) => void;
	imagesSrc: string[];
};
export const PhotoManager = ({
	handleImgUpload,
	imagesSrc,
}: PhotoManagerProps) => {
	console.log(imagesSrc);
	if (imagesSrc.length > 0) {
		return (
			<NextImage
				src={imagesSrc[0]}
				alt="Podgląd miniatury"
				width={100}
				height={100}
				className="max-w-lg w-full"
			/>
		);
	}
	return <FileInput handleChange={handleImgUpload} name="image" />;
};
