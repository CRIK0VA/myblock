import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	TextareaControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text, align } = attributes;
	const onChangeText = ( val ) => {
		setAttributes( { text: val } );
	};
	return (
		<>
			<InspectorControls>
				<PanelBody title="Content" initialOpen>
					<TextareaControl
						label="Title"
						value={ text }
						help="Inseret Title"
						onChange={ onChangeText }
					/>
					<ToggleControl label="Yes or No" checked={ true } />
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) => setAttributes( { align: value } ) }
				/>
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					className: `genius-align-${ align }`,
				} ) }
				tagName="h1"
				value={ text }
				onChange={ onChangeText }
				placeholder={ 'Введите заголовок' }
				allowedFormats={ [] }
			/>
		</>
	);
}
