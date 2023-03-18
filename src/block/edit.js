import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { title, description, image_id, image_url, image_alt } = attributes;
	return (
		<div { ...useBlockProps() }>
			{ image_url && (
				<img src={ image_url } alt={ image_alt } id={ image_id } />
			) }
			<MediaPlaceholder
				onSelect={ ( val ) =>
					setAttributes( {
						image_id: val.id,
						image_url: val.url,
						image_alt: val.alt,
					} )
				}
				onSelectURL={ ( val ) =>
					setAttributes( {
						image_id: undefined,
						image_url: val,
						image_alt: '',
					} )
				}
				accept="image/*"
				allowedTypes={ [ 'image' ] }
				disableMediaButtons={ image_url }
			/>
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
