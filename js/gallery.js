// A $( document ).ready() block.
$( document ).ready(function() {
    //console.log( "ready!" );

    $("#blinn-gallery").nanogallery2({
        thumbnailW: "300"
        thumbnailH: "auto"
        thumbnailBorderVertical: 0,
        thumbnailBorderHorizontal: 0,
        thumbnailLabel: {
            position: "overImageOnB",
            display: false
        },
        thumbnailHoverEffect2: "imageScaleIn80|imageSepia)ff|labelAppear75", 
        thumbnailGutterWidth: 0

      });

    });