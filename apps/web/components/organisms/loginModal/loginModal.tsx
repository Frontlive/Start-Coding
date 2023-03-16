import { Modal } from 'molecules/modal/modal';
import { Button, Link } from 'ui';

type LoginModalProps = {
	isOpen: boolean;
	onClose: () => void;
};
export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
	const onClickHandler = () => {
		onClose();
	};

	return (
		<Modal
			title="Ta opcja dostępna jest tylko dla zalogowanych użytkowników"
			isOpen={isOpen}
			closeHandler={onClickHandler}
		>
			<div className="flex items-center justify-center pt-5">
				<Link href="/api/auth/login" variant="primary">
					Zaloguj się
				</Link>
				<Button variant="primary" onClick={onClickHandler}>
					Anuluj
				</Button>
			</div>
		</Modal>
	);
};
