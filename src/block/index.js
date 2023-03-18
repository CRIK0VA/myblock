import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'genius/myblock', {
	title: __( 'My Block', 'myblocks' ),
	description: __( 'Single Block', 'myblocks' ),
	icon: 'universal-access',
	parent: [ 'genius/myblocks' ],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		image_url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		image_alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		image_id: {
			type: 'number',
		},
	},
	edit: Edit,
	save: Save,
} );
