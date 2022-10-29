import Image from 'next/future/image';
import cx from 'clsx';

type ImgPreviewSize = 'small' | 'big';

type ImgPreviewProps = {
	src: string;
	alt: string;
	height: string | number;
	width: string | number;
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
				className="w-full h-full"
				src={src}
				alt={alt}
				height={height}
				width={width}
			/>
		</div>
	);
};
