$('.filters ul li').click(function() {
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');

    var data = $(this).attr('data-filter');
    $grid.isotope({
        filter: data
    })
});

var $grid = $(".grid ").isotope({
    itemSelector: ".all ",
    percentPosition: true,
    masonry: {
        columnWidth: ".all "
    }
})


$(document).ready(function() {
    $(".read").click(function() {
        $(this).prev().toggle();
        $(this).siblings('.dots').toggle();
        if ($(this).text() == 'Read more') {
            $(this).text('Read less');
        } else {
            $(this).text('Read more');
        }
    });
});