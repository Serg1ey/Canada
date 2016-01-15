$( document ).ready(function( $ ) {
    $( '#example5' ).sliderPro({
        width: 600,
        height: 570,
        orientation: 'vertical',
        loop: true,
        arrows: true,
        buttons: false,
        thumbnailsPosition: 'right',
        thumbnailPointer: true,
        thumbnailWidth: 100,
        breakpoints: {
            800: {
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 100,
                thumbnailHeight: 100
            },
            500: {
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 80,
                thumbnailHeight: 80,
            }
        }
    });
});