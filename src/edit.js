import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks allowedBlocks={ [ 'genius/myblock' ] } />
		</div>
	);
}
