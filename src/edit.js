import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<>
			<BlockControls
				controls={ [
					{
						title: 'Button',
						icon: 'admin-media',
						isActive: true,
						onClick: () => console.log( 'Button Clicked' ),
					},
					{
						title: 'Button 2',
						icon: 'admin-customizer',
						onClick: () => console.log( 'Button 2 Clicked' ),
					},
				] }
			>
				{ text && (
					<ToolbarGroup>
						<p>Align: </p>
						<ToolbarButton
							title="Align Left"
							icon="editor-alignleft"
							onClick={ () => console.log( 'Align Left' ) }
						/>
						<ToolbarButton
							title="Align Center"
							icon="editor-aligncenter"
							onClick={ () => console.log( 'Align Center' ) }
						/>
						<ToolbarButton
							title="Align Right"
							icon="editor-alignright"
							onClick={ () => console.log( 'Align Right' ) }
						/>
						<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label="More Option"
							controls={ [
								{
									title: 'Button 1',
									icon: 'admin-media',
								},
								{
									title: 'Button 2',
									icon: 'admin-media',
								},
							] }
						/>
					</ToolbarGroup>
				) }
				<ToolbarGroup>
					<ToolbarButton title="Test button" icon="admin-comments" />
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{ ...useBlockProps() }
				tagName="h1"
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				placeholder={ 'Введите заголовок' }
				allowedFormats={ [] }
			/>
		</>
	);
}
