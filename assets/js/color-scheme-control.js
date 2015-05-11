/* global colorScheme, Color */
/**
 * Add a listener to the Color Scheme control to update other color controls to new values/defaults.
 * Also trigger an update of the Color Scheme CSS when a color is changed.
 */

( function( api ) {
	// JUST ADD THE CONTROL NAME TO THE KEYS AND SETTINGS ARRAYS HERE
	var cssTemplate = wp.template( 'cpd-color-scheme' ),
		colorSchemeKeys = [
			'cpd_widget_link_bg_color',
			'cpd_widget_link_bg_color_alt',
			'cpd_widget_link_color',
			'cpd_widget_link_color_alt',
			'cpd_widget_heading_bg_color',
			'cpd_widget_heading_color',
			'cpd_main_bg_color',
			'cpd_article_bg_color',
			'cpd_article_text_color',
			'cpd_article_foot_bg_color',
			'cpd_article_foot_text_color',
			'cpd_sidebar_bg_color',
			'cpd_title_tagline_color'
		],
		colorSettings = [
			'cpd_widget_link_bg_color',
			'cpd_widget_link_bg_color_alt',
			'cpd_widget_link_color',
			'cpd_widget_link_color_alt',
			'cpd_widget_heading_bg_color',
			'cpd_widget_heading_color',
			'cpd_main_bg_color',
			'cpd_article_bg_color',
			'cpd_article_text_color',
			'cpd_article_foot_bg_color',
			'cpd_article_foot_text_color',
			'cpd_sidebar_bg_color',
			'cpd_title_tagline_color'
		];

	api.controlConstructor.select = api.Control.extend( {
		ready: function() {
			if ( 'color_scheme' === this.id ) {
				this.setting.bind( 'change', function( value ) {
					// THEN ADD A BLOCK FOR EVERY ADDITIONAL COLOR OPTION HERE
					// THIS CAN BE MADE DRY-ER - REVISIT!

					// Widget Link Background Color
					api( 'cpd_widget_link_bg_color' ).set( colorSchemeCPD[value].colors[6] );
					api.control( 'cpd_widget_link_bg_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[6] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[6] );

					// Widget Link Hover/Focus/Active Background Color.
					api( 'cpd_widget_link_bg_color_alt' ).set( colorSchemeCPD[value].colors[7] );
					api.control( 'cpd_widget_link_bg_color_alt' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[7] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[7] );

					// Widget Link Foreground Color.
					api( 'cpd_widget_link_color' ).set( colorSchemeCPD[value].colors[8] );
					api.control( 'cpd_widget_link_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[8] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[8] );

					// Widget Link Hover/Focus/Active Foreground Color.
					api( 'cpd_widget_link_color_alt' ).set( colorSchemeCPD[value].colors[9] );
					api.control( 'cpd_widget_link_color_alt' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[9] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[9] );

					// Widget Link Hover/Focus/Active Foreground Color.
					api( 'cpd_widget_heading_bg_color' ).set( colorSchemeCPD[value].colors[10] );
					api.control( 'cpd_widget_heading_bg_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[10] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[10] );

					// Widget Link Hover/Focus/Active Foreground Color.
					api( 'cpd_widget_heading_color' ).set( colorSchemeCPD[value].colors[11] );
					api.control( 'cpd_widget_heading_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[11] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[11] );

					// Main Content Background Color.
					api( 'cpd_main_bg_color' ).set( colorSchemeCPD[value].colors[12] );
					api.control( 'cpd_main_bg_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[12] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[12] );

					// Article Background Color.
					api( 'cpd_article_bg_color' ).set( colorSchemeCPD[value].colors[13] );
					api.control( 'cpd_article_bg_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[13] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[13] );

					// Article Text Color.
					api( 'cpd_article_text_color' ).set( colorSchemeCPD[value].colors[14] );
					api.control( 'cpd_article_text_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[14] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[14] );

					// Article Background Color.
					api( 'cpd_article_foot_bg_color' ).set( colorSchemeCPD[value].colors[15] );
					api.control( 'cpd_article_foot_bg_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[15] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[15] );

					// Article Text Color.
					api( 'cpd_article_foot_text_color' ).set( colorSchemeCPD[value].colors[16] );
					api.control( 'cpd_article_foot_text_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[16] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[16] );

					// Header & Sidebar Background Color.
					api( 'cpd_sidebar_bg_color' ).set( colorSchemeCPD[value].colors[17] );
					api.control( 'cpd_sidebar_bg_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[17] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[17] );

					// Header & Sidebar Background Color.
					api( 'cpd_title_tagline_color' ).set( colorSchemeCPD[value].colors[18] );
					api.control( 'cpd_title_tagline_color' ).container.find( '.color-picker-hex' )
						.data( 'data-default-color', colorSchemeCPD[value].colors[18] )
						.wpColorPicker( 'defaultColor', colorSchemeCPD[value].colors[18] );
				} );
			}
		}
	} );

	// NOTHING SOUTH OF HERE NEEDS TOUCHING
	// Generate the CSS for the current Color Scheme.
	function updateCSS() {
		var scheme = api( 'color_scheme' )(), css,
			colors = _.object( colorSchemeKeys, colorSchemeCPD[ scheme ].colors );

		// Merge in color scheme overrides.
		_.each( colorSettings, function( setting ) {
			colors[ setting ] = api( setting )();
		});

		css = cssTemplate( colors );

		api.previewer.send( 'update-color-scheme-css', css );
	}

	// Update the CSS whenever a color setting is changed.
	_.each( colorSettings, function( setting ) {
		api( setting, function( setting ) {
			setting.bind( updateCSS );
		} );
	} );
} )( wp.customize );