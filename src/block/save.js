import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { title, description, image_id, image_url, image_alt } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<img src={ image_url } alt={ image_alt } id={ image_id } />
			<RichText.Content tagName="h2" value={ title } />
			<RichText.Content tagName="p" value={ description } />
		</div>
	);
}
