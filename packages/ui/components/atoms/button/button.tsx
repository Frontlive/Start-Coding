import { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';
import clsx from 'clsx';

type ButtonVariants = 'primary' | 'secondary';

const variants = {
	primary: 'bg-primary text-white border-white',
	secondary: 'bg-white text-black border-primary',
} as const;

type ButtonProps = {
	children: ReactNode;
	type?: 'submit' | 'button';
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	variant: ButtonVariants;
	fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
	children,
	onClick,
	type = 'button',
	variant,
	fullWidth = false,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={clsx(variants[variant], 'rounded-2xl border-2 p-2', {
				'w-full': fullWidth,
			})}
			onClick={onClick}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};
