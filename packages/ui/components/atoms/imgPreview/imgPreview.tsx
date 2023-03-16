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
			className={cx('h-full w-full', {
				'max-h-16 max-w-xs ': size === 'small',
				'max-w-4 max-h-4': size === 'big',
			})}
		>
			<Image
				className="h-auto w-auto"
				src={src}
				alt={alt}
				height={height}
				width={width}
			/>
		</div>
	);
};
