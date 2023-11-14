<?php
/**
 * Plugin Name: Dynamic Posts
 * Plugin URI: https://geniuscourses.com
 * Description: Gutenberg Dynamic Block
 * Author: Alex Sochirca
 * Author URI: https://geniuscourses.com
 */

 function genius_dynamicblock_init(){
    register_block_type_from_metadata( __DIR__ );
 }
 add_action('init','genius_dynamicblock_init');