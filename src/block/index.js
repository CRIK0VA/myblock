import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'genius/myblock', {
	title: __( 'My Block', 'myblocks' ),
	description: __( 'Single Block', 'myblocks' ),
	icon: 'universal-access',
	parent: [ 'genius/myblocks' ],
	edit: () => <p>Admin Edit</p>,
	save: () => <p>Front Save</p>,
} );
