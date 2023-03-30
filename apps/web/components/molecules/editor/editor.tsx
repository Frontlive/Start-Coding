import { Text } from 'ui';
import ReactQuill from 'react-quill';

type EditorProps = {
	initialEditorState?: string;
	onChange: (state: string) => void;
	value: string;
	readOnly?: boolean;
	placeholder?: string;
};

export const Editor = ({
	initialEditorState,
	onChange,
	value,
	readOnly = false,
	placeholder,
}: EditorProps) => {
	return (
		<div className="mt-1 mb-2">
			<Text size="medium" variant="default" tag="p" position="left">
				Opis
			</Text>
			<ReactQuill
				theme="snow"
				value={value}
				onChange={onChange}
				readOnly={readOnly}
				defaultValue={initialEditorState}
				placeholder={placeholder}
				formats={['header', 'bold', 'italic', 'underline']}
			/>
		</div>
	);
};
