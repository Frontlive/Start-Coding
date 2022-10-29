import { FileUploader } from 'react-drag-drop-files';
import { ReactNode } from 'react';

const fileTypes = ['JPG', 'PNG'];

type FileInputProps = {
	handleChange: (file: File) => void;
	children: ReactNode;
};

export const FileInput = ({ handleChange, children }: FileInputProps) => {
	return (
		<div className="w-full min-h-full border-2 rounded-xl border-purple-700 p-4 flex-col items-center cursor-pointer">
			<FileUploader
				name="challenge"
				types={fileTypes}
				handleChange={handleChange}
			>
				{children}
			</FileUploader>
		</div>
	);
};
