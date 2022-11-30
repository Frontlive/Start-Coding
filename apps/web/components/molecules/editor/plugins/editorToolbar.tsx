import { useCallback, useEffect, useRef, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, FORMAT_TEXT_COMMAND, $isRangeSelection } from 'lexical';
import { mergeRegister } from '@lexical/utils';
import { ReactComponent as BoldIcon } from 'icons/editor/boldIcon.svg';

import cx from 'clsx';

export const EditorToolbarPlugin = () => {
	const [editor] = useLexicalComposerContext();

	const toolbarRef = useRef(null);
	const [isBold, setIsBold] = useState(false);

	const updateToolbar = useCallback(() => {
		const selection = $getSelection();
		if ($isRangeSelection(selection)) {
			setIsBold(selection.hasFormat('bold'));
		}
	}, []);

	useEffect(() => {
		return mergeRegister(
			editor.registerUpdateListener(({ editorState }) => {
				editorState.read(() => {
					updateToolbar();
				});
			}),
		);
	}, [editor, updateToolbar]);

	return (
		<div className="border-2 p-1" ref={toolbarRef}>
			<button
				onClick={() => {
					editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
				}}
				className={cx('p-1', {
					active: isBold,
				})}
			>
				<BoldIcon />
			</button>
		</div>
	);
};
