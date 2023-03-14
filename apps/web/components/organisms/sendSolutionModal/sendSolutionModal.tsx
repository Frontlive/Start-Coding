import { Button, Input } from 'ui';
import { Modal } from 'molecules/modal/modal';
import { useSolutionForm } from 'organisms/sendSolutionModal/useSolutionForm';

type SendSolutionModalProps = {
	isOpen: boolean;
	onClose: () => void;
};
export const SendSolutionModal = ({
	isOpen,
	onClose,
}: SendSolutionModalProps) => {
	const { register, errors } = useSolutionForm();

	return (
		<Modal
			title="Prześlij swoje rozwiązanie"
			isOpen={isOpen}
			closeHandler={onClose}
		>
			<form>
				<div className="pt-5">
					<Input
						{...register('deployment')}
						type="text"
						isError={Boolean(errors.deployment)}
						label="Link do wydeploy'owanego zadania"
						errorMessage={errors.deployment?.message || ''}
					/>
				</div>
				<div className="pt-5">
					<Input
						{...register('sourceCode')}
						type="text"
						isError={Boolean(errors.sourceCode)}
						label="Link do kodu"
						errorMessage={errors.sourceCode?.message || ''}
					/>
				</div>
				<div className="pt-5">
					<Input
						{...register('comments')}
						type="text"
						isError={Boolean(errors.comments)}
						label="Uwagi"
						errorMessage={errors.comments?.message || ''}
					/>
				</div>
				<Button variant="primary" type="submit">
					Wyślij
				</Button>
			</form>
		</Modal>
	);
};
