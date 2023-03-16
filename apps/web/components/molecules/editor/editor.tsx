import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import type { EditorState, EditorThemeClasses, LexicalEditor } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import {
	registerCodeHighlighting,
	CodeNode,
	CodeHighlightNode,
} from '@lexical/code';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { $generateHtmlFromNodes } from '@lexical/html';
import { EditorToolbarPlugin } from 'molecules/editor/plugins/editorToolbar';
import { Text } from 'ui';

type EditorProps = {
	initialEditorState?: string;
	onChange: (state: string) => void;
};

const CodeHighlightPlugin = () => {
	const [editor] = useLexicalComposerContext();
	useEffect(() => {
		return registerCodeHighlighting(editor);
	}, [editor]);
	return null;
};

export const Editor = ({ initialEditorState, onChange }: EditorProps) => {
	const handleChange = (editorState: EditorState, editor: LexicalEditor) => {
		editor.update(() => {
			const html = $generateHtmlFromNodes(editor, null);
			onChange(html);
		});
	};
	const theme: EditorThemeClasses = {};
	const onError = (error: Error) => console.log(error);
	const initialConfig = {
		namespace: 'MyEditor',
		theme,
		onError,
		nodes: [CodeNode, CodeHighlightNode],
		editorState: initialEditorState,
	};
	return (
		<>
			<LexicalComposer initialConfig={initialConfig}>
				<div className="mt-1 mb-2">
					<Text size="medium" variant="default" tag="p" position="left">
						Opis
					</Text>
				</div>

				<EditorToolbarPlugin />
				<RichTextPlugin
					placeholder=""
					contentEditable={
						<ContentEditable className="min-h-100 mt-2 rounded-md border-2 p-2" />
					}
					ErrorBoundary={LexicalErrorBoundary}
				/>
				<OnChangePlugin onChange={handleChange} />
				<HistoryPlugin />
				<CodeHighlightPlugin />
			</LexicalComposer>
		</>
	);
};
