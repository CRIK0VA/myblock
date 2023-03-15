import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { title, description } = attributes;
	return (
		<div { ...useBlockProps() }>
			<RichText
				tagName="h2"
				allowedFormats={ [] }
				value={ title }
				placeholder={ __( 'Your Title', 'myblocks' ) }
				onChange={ ( val ) => setAttributes( { title: val } ) }
			/>
			<RichText
				tagName="p"
				allowedFormats={ [] }
				value={ description }
				placeholder={ __( 'Your Description', 'myblocks' ) }
				onChange={ ( val ) => setAttributes( { description: val } ) }
			/>
		</div>
	);
}
