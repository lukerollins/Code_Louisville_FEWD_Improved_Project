$( function() {
    $( '#gallery' ).jGallery({
        height: '400px',
        items: [
            {
                title: 'Recycled book sketchbook',
                images: [
                    {
                        url: 'Imgs/front view recycled sketchbook portfolio.png',
                        thumbUrl: 'Imgs/sketchbook recyleced front thumb.jpg',
                        title: 'Exterior view of recycled book sketchbook.'
                    },
                    {
                        url: 'Imgs/interior view recycled sketchbook porfolio.png',
                        thumbUrl: 'Imgs/sketchbook recycled interior thumb.jpg',
                        title: 'Interior view of recycled book sketchbook.'
                    },
                    {
                        url: 'Imgs/side view recycled sketchbook portfolio.png',
                        thumbUrl: 'Imgs/sketchbook recycled book side view thumb.jpg',
                        title: 'Side view of recycled book sketchbook.'
                    }
                ]
            },
            
        ]
    });
} );