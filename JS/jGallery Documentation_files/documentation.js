require( ['jquery'], function( $ ) {
    var $html = jQuery( 'html' );
    
    require( ['jgallery', 'touchswipe'], function() {
        ( function( $ ) {
            var init = function() {
                var $body = $( 'body' );
                var $documentation = $( '#documentation' );
                var $preview = $documentation.find( '.preview' );
                var $galleryContainer = $preview.find( '.gallery-container' );
                var $sliderContainer = $preview.find( '.slider-container' );
                var $gallery = $preview.find( '.gallery' );
                var $slider = $preview.find( '.slider' );
                var closePreview = function() {
                    $body.css( 'overflow', 'auto' );
                    $preview.hide();
                };
                var imagesPrepared = false;

                $preview.$close = $preview.find( '.close' );   
                $documentation.find( 'a[href="#/"]' ).on( 'click', function() {
                    var $this = $( this );
                    var options = {};
                    var value = $.trim( $this.data( 'value' ) );

                    options[$.trim( $this.data( 'name' ) )] = ( function() {
                        switch( $this.data( 'type' ) ) {
                            case 'Number':
                                return parseInt( value );
                            case 'String':
                                return value.substring( 1, value.length - 1 );
                            case 'Function':
								var args = $this.data( 'value' ).replace('function(', '').replace(/\) \{.*/, '').split(',');
								var body = $this.data( 'value' ).replace( /function\(.*\) \{ /, '' ).replace( ' }', '' );
		
                                return Function.apply( null, args.concat([body]) );
                            case 'Boolean':
                                return value === 'true' ? true : false;
                        }
                    } )();
                    $body.css( 'overflow', 'hidden' );
                    $preview.show();
                    if ( ! imagesPrepared ) {
                        imagesPrepared = true;
                        onDOMContentLoaded( function() {
                            jGalleryPage.prepareImages();
                        } );                            
                    }
                    if ( options.mode && options.mode === 'slider' ) {
                        if ( $slider.is( '[data-jgallery-id]' ) ) {
                            $slider.jGallery().destroy();
                        }
                        $galleryContainer.hide();
                        $sliderContainer.show();
                        $slider.jGallery( options );
                    }
                    else {
                        if ( $gallery.is( '[data-jgallery-id]' ) ) {
                            $gallery.jGallery().destroy();
                        }
                        $sliderContainer.hide();
                        $galleryContainer.show();
                        $gallery.jGallery( options );
                    }
                    return false;
                } );
                $preview.$close.on( 'click', closePreview );
                $html.on( {
                    keydown: function( event ) {
                        if ( event.which === 27 ) {
                            closePreview();
                        }
                    }
                } );
            };
            onDOMContentLoaded( init );
        } )( jQuery );
    } );
} );
require( ['highlightjs'], function() {
    hljs.tabReplace = '    '; //4 spaces
    hljs.initHighlighting();            
} );
require( ['tinycolor'], function( tinycolor ) {     
    window.tinycolor = tinycolor;        
} );
