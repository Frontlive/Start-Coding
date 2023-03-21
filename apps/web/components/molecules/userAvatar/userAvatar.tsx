import Image from 'next/image';
import clsx from 'clsx';

type CommentUserAvatarProps = {
	avatar: string;
	size?: '12' | '10' | '24';
};

export const UserAvatar = ({ avatar, size = '24' }: CommentUserAvatarProps) => {
	const sizes = {
		24: 'w-24 h-24',
		12: 'w-12 h-12',
		10: 'w-10 h-10',
	};

	return (
		<Image
			alt=""
			src={avatar}
			width={1000}
			height={1000}
			className={clsx(
				'object-cover border-2 border-gray-300 rounded-full',
				sizes[size],
			)}
		/>
	);
};
