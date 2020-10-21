(function($) {
    "use strict";
    $(document).ready(function() {
        if (typeof twitterFetcher !== 'undefined' && ($('.ewf_widget_latest_tweets').length > 0)) { $('.ewf_widget_latest_tweets').each(function(index) { var account_id = $('.ewf-tweet-list', this).attr('data-account-id'),
                    items = $('.ewf-tweet-list', this).attr('data-items'),
                    newID = 'ewf-tweet-list-' + index;
                $('.ewf-tweet-list', this).attr('id', newID); var config = { "id": account_id, "domId": newID, "maxTweets": items };
                twitterFetcher.fetch(config); }); }
        if (typeof $.fn.simplePlaceholder !== 'undefined') { $('input[placeholder], textarea[placeholder]').simplePlaceholder(); }
        if (typeof $.fn.fitVids !== 'undefined') { $('.fitvids').fitVids(); }
        if (typeof $.fn.superfish !== 'undefined') { $('#menu').superfish({ delay: 500, animation: { opacity: 'show', height: 'show' }, speed: 100, cssArrows: false }); }
        if (typeof $.fn.bxSlider !== 'undefined') { $('.portfolio-slider .slides').bxSlider({ mode: 'horizontal', speed: 500, infiniteLoop: true, hideControlOnEnd: false, pager: true, pagerType: 'full', controls: true, auto: false, pause: 4000, autoHover: true, useCSS: false });
            $('.blog-post-slider .slides').bxSlider({ mode: 'horizontal', speed: 500, infiniteLoop: true, hideControlOnEnd: false, pager: false, pagerType: 'full', controls: true, auto: false, pause: 4000, autoHover: true, useCSS: false, slideWidth: "370", minSlides: 1, maxSlides: 5, moveSlides: 1, slideMargin: 30 });
            $('.testimonial-slider .slides').bxSlider({ mode: 'fade', speed: 800, infiniteLoop: true, hideControlOnEnd: false, pager: true, pagerType: 'full', controls: false, auto: true, pause: 4000, autoHover: true, useCSS: false });
            $('.carousel .slides').bxSlider({ mode: 'horizontal', speed: 500, infiniteLoop: true, hideControlOnEnd: false, pager: true, pagerType: 'full', controls: false, auto: false, pause: 4000, autoHover: true, useCSS: false });
            $('.vertical-carousel .slides').bxSlider({ mode: 'vertical', speed: 500, infiniteLoop: true, hideControlOnEnd: false, pager: true, pagerType: 'full', controls: false, auto: false, pause: 4000, autoHover: true, useCSS: false }); }
        if (typeof $.fn.magnificPopup !== 'undefined') { $('.magnificPopup').magnificPopup({ disableOn: 400, closeOnContentClick: true, type: 'image' });
            $('.magnificPopup-gallery').magnificPopup({ disableOn: 400, type: 'image', gallery: { enabled: true } });
            $('.magnificPopup-project').magnificPopup({ type: 'ajax', closeOnContentClick: true, gallery: { enabled: true } }) }
        if (typeof $.fn.gMap !== 'undefined') {
            $('.google-map').each(function() {
                var $t = $(this),
                    mapZoom = parseInt($t.attr("data-zoom"), 10),
                    mapAddress = $t.attr("data-address"),
                    mapCaption = $t.attr("data-caption"),
                    mapType = "ROADMAP",
                    popUp = false;
                if ($t.attr("data-maptype") !== undefined) { mapType = $t.attr("data-maptype"); }
                if ($t.attr("data-popup") !== undefined) { popUp = $t.attr("data-popup"); }
                $t.gMap({ maptype: mapType, scrollwheel: false, zoom: mapZoom, markers: [{ address: mapAddress, html: mapCaption, popup: popUp }], controls: { panControl: true, zoomControl: true, mapTypeControl: true, scaleControl: false, streetViewControl: false, overviewMapControl: false } });
            });
        }
        if ((typeof $.fn.isotope !== 'undefined') && (typeof $.fn.imagesLoaded !== 'undefined') && ($('.portfolio-isotope').length > 0)) { $('.portfolio-isotope').imagesLoaded(function() { var container = $('.portfolio-isotope');
                container.isotope({ itemSelector: '.item', layoutMode: 'masonry', transitionDuration: '0.5s' });
                $('.portfolio-filter li a').click(function() { $('.portfolio-filter li a').removeClass('active');
                    $(this).addClass('active'); var selector = $(this).attr('data-filter');
                    container.isotope({ filter: selector }); return false; });
                $(window).resize(function() { container.isotope({}); }); }); }
        if (typeof $.fn.scrollspy != 'undefined') { $('body').scrollspy({ target: '#header', offset: 100 }); }
    });
    $(window).scroll(function() {});
})(window.jQuery);