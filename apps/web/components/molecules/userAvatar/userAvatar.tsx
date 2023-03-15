import Image from 'next/image';
import clsx from 'clsx';

type CommentUserAvatarProps = {
	avatar: string;
	size?: number;
};

export const UserAvatar = ({ avatar, size = 24 }: CommentUserAvatarProps) => {
	const sizeClass = `w-${size} h-${size}`;
	return (
		<Image
			alt=""
			src={avatar}
			width={1000}
			height={1000}
			className={clsx(
				'object-cover border-2 border-gray-300 rounded-full',
				sizeClass,
			)}
		/>
	);
};
