import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

type ButtonVariant = 'outline-white' | 'contained-white' | 'contained-magenta';

type ButtonProps = {
	variant: ButtonVariant;
	children: ReactNode;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

export const Button = ({ variant, children, ...props }: ButtonProps) => {
	return (
		<button
			className={clsx(
				'a11y-button text-white px-6 border py-2 rounded tracking-wide font-medium shadow transition-colors ease-linear',
				{
					'border-magenta-mid bg-magenta-mid hover:border-opacity-70 hover:bg-opacity-70 active:border-opacity-95 active:bg-opacity-95':
						variant === 'contained-magenta',
					'border-white bg-white text-black hover:border-opacity-70 hover:bg-opacity-70 active:border-opacity-95 active:bg-opacity-95':
						variant === 'contained-white',
					'border-white bg-transparent hover:bg-white hover:text-black active:border-opacity-70 active:bg-opacity-70':
						variant === 'outline-white',
				},
			)}
			{...props}
		>
			{children}
		</button>
	);
};
