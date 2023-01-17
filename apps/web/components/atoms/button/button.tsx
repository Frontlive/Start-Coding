import { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';
import clsx from 'clsx';

type ButtonVariants = 'default' | 'primary' | 'secondary';

const defaultStyles = 'p-2 border-2 rounded-2xl';

const variants = {
	default: '',
	primary: clsx(defaultStyles, 'bg-primary text-white border-white'),
	secondary: clsx(defaultStyles, 'bg-white text-black border-primary'),
} as const;

type ButtonProps = {
	children: ReactNode;
	type?: 'submit' | 'button';
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	variant: ButtonVariants;
	fullWidth?: boolean;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
	children,
	onClick,
	type = 'button',
	variant,
	fullWidth = false,
	className,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				variants[variant],
				{
					'w-full': fullWidth,
				},
				className,
			)}
			{...rest}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
