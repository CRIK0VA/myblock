<?php
/**
 * Plugin Name: My Block
 * Plugin URI: https://geniuscourses.com
 * Description: Gutenberg Block
 * Author: Alex Sochirca
 * Author URI: https://geniuscourses.com
 */

 function genius_myblock_init(){
    register_block_type_from_metadata( __DIR__ );
 }
 add_action('init','genius_myblock_init');