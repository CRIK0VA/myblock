import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<RichText
			{ ...useBlockProps() }
			tagName="h1"
			value={ text }
			onChange={ ( value ) => setAttributes( { text: value } ) }
			placeholder={ 'Введите заголовок' }
			allowedFormats={ [ 'core/bold' ] }
		/>
	);
}
