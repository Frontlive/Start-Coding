import { Button } from 'atoms/button/button';
import clsx from 'clsx';
import Image from 'next/image';
import BurgerIcon from '../../icons/burger-icon.svg';
import ExitIcon from '../../icons/exit-icon.svg';

type ToggleMenuButtonProps = {
	isOpen: boolean;
	navId: string;
	onClick: () => void;
	className?: string;
};

export const ToggleMenuButton = ({
	isOpen,
	navId,
	onClick,
	className,
}: ToggleMenuButtonProps) => {
	return (
		<Button
			variant="default"
			type="button"
			aria-label={`${isOpen ? 'Zamknij' : 'Otwórz'} menu`}
			aria-expanded={isOpen}
			aria-controls={navId}
			onClick={onClick}
			className={clsx(
				'relative z-30 flex lg:hidden ml-auto w-12 h-12',
				className,
			)}
		>
			<Image
				src={isOpen ? ExitIcon : BurgerIcon}
				alt=""
				height={50}
				width={50}
			/>
		</Button>
	);
};
