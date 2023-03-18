import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import { Spinner, ToolbarButton } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { title, description, image_id, image_url, image_alt } = attributes;

	const onSelectURL = ( val ) => {
		setAttributes( {
			image_id: undefined,
			image_url: val,
			image_alt: '',
		} );
	};
	const onSelect = ( val ) => {
		setAttributes( {
			image_id: val.id,
			image_url: val.url,
			image_alt: val.alt,
		} );
	};

	return (
		<>
			{ image_url && (
				<BlockControls>
					<MediaReplaceFlow
						name={ __( 'Replace Image', 'myblocks' ) }
						onSelect={ onSelect }
						onSelectURL={ onSelectURL }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						mediaId={ image_id }
						mediaURL={ image_url }
					/>
					<ToolbarButton
						onClick={ () =>
							setAttributes( {
								image_id: undefined,
								image_url: undefined,
								image_alt: '',
							} )
						}
					>
						{ __( 'Remove Image', 'myblocks' ) }
					</ToolbarButton>
				</BlockControls>
			) }
			<div { ...useBlockProps() }>
				{ image_url && (
					<div
						className={ `image ${
							isBlobURL( image_url ) ? 'is-loading' : 'loaded'
						}` }
					>
						<img
							src={ image_url }
							alt={ image_alt }
							id={ image_id }
						/>
						{ isBlobURL( image_url ) && <Spinner /> }
					</div>
				) }
				<MediaPlaceholder
					onSelect={ onSelect }
					onSelectURL={ onSelectURL }
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
					onChange={ ( val ) =>
						setAttributes( { description: val } )
					}
				/>
			</div>
		</>
	);
}
