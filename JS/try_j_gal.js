$( function() {
    $( '#gallery' ).jGallery({
        items: [
            {
                title: 'Album 1',
                images: [
                    {
                        url: 'Imgs/front%20view%20recycled%20sketchbook%20portfolio.png',
                        thumbUrl: 'Imgs/sketchbook recyleced front thumb.jpg',
                        title: 'Photo1'
                    },
                    {
                        url: 'Imgs/interior%20view%20recycled%20sketchbook%20porfolio.png',
                        thumbUrl: 'Imgs/sketchbook recycled interior thumb.jpg',
                        title: 'Photo2'
                    },
                    {
                        url: 'Imgs/side%20view%20recycled%20sketchbook%20portfolio.png',
                        thumbUrl: 'Imgs/sketchbook recycled book side view thumb.jpg',
                        title: 'Photo3'
                    }
                ]
            },
            
            {
                title: 'Album 2',
                images: [
                    {
                        url: 'static/jgallery/images/large/4.jpg',
                        thumbUrl: 'static/jgallery/images/thumbs/4.jpg',
                        title: 'Photo4'
                    },
                    {
                        url: 'static/jgallery/images/large/5.jpg',
                        thumbUrl: 'static/jgallery/images/thumbs/5.jpg',
                        title: 'Photo5'
                    },
                    {
                        url: 'static/jgallery/images/large/6.jpg',
                        thumbUrl: 'static/jgallery/images/thumbs/6.jpg',
                        title: 'Photo6'
                    }
                ]
            }
        ]
    });
} );