import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { columns } = attributes;
	return (
		<div
			{ ...useBlockProps.save( {
				className: `the-${ columns }-columns`,
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
