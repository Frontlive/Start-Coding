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
			<div className="pt-5 flex justify-center items-center">
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
