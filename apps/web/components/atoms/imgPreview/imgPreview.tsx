import Image from 'next/image';
import cx from 'clsx';

type ImgPreviewSize = 'small' | 'big';

type ImgPreviewProps = {
	src: string;
	alt: string;
	height: number;
	width: number;
	size: ImgPreviewSize;
};

export const ImgPreview = ({
	alt,
	src,
	height,
	width,
	size,
}: ImgPreviewProps) => {
	return (
		<div
			className={cx('w-full h-full', {
				'max-h-16 max-w-xs ': size === 'small',
				'max-h-4 max-w-4': size === 'big',
			})}
		>
			<Image
				className="w-auto h-auto"
				src={src}
				alt={alt}
				height={height}
				width={width}
			/>
		</div>
	);
};
