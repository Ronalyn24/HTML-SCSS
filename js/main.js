
bugherAnimation = function () {

    $ = jQuery.noConflict();

    $('.header-ctner__menuBarIcon').click(function () {
        $('html').toggleClass('open-menu');
    });

    $('.pri-menu--mobile .pri-menu__menu-item a').click(function () {
        $('html').toggleClass('open-menu');
    });

    // FOR ACTIVE MENU
    $('.pri-menu__menu-item').click(function () {
        $('.pri-menu__menu-item.active').removeClass('active');
        $(this).addClass('active');
    });
}

flickitySliders = function () {

    $ = jQuery.noConflict();

    var $carouselBanner = $('.bannerCarousel').flickity({       
        fade: true,
        imagesLoaded: true,
        wrapAround: true,
        autoPlay: 5000,
        //autoPlay: false,
        cellSelector: '.bannerCarousel__cell',
        pauseAutoPlayOnHover: false,
        freeScroll: false,
        prevNextButtons: false,
        pageDots: false
    });

    
    $carouselBanner.flickity();

    var $carousel = $('.tc-carousel').flickity({
        freeScroll: true,
        wrapAround: true,
        cellSelector: '.tc-carousel__cell',
        // cellAlign: 'left',
        accessibility: true,
        autoPlay: 3000,
        //autoPlay: false,
        prevNextButtons: false,
        pageDots: true,
        groupCells: 1
    });

    // previous

    $('.button--previous').on('click', function () {
        $carousel.flickity('previous');
    });

    // next

    $('.button--next').on('click', function () {
        $carousel.flickity('next');
    });

    $carousel.show().flickity();
}

tabFuntion = function() {

    $ = jQuery.noConflict();

    $('.tab-header__item').click(function() {
        var tab_id = $(this).attr('data-tab-item');

        $('.tab-header__item').removeClass('current'); 
        $('.tab-content__wrapper').removeClass('current');

        $(this).addClass('current');
        $("#tab-inner-content-"+tab_id).addClass('current');
    });
}

showPortfolioRow = function() {

    $ = jQuery.noConflict();
    $('.aw-genBtn.portBtn').click(function(){
        $('.showRowItems').removeClass('showRowItems').addClass('hideButton');
        $('.portfolio--secondRow').addClass('showSecondRow');
    });

}

customLightBox = function () {

    $ = jQuery.noConflict();

    $('.awShopPopup').click(function () {

        $('html').addClass('lightbox-open');
        $('html').removeClass('hide-lightbox');
    });

    $('.popupCtn__bckClose, .popupCtn__bckCloseBg').click(function () {

        $('html').removeClass('lightbox-open');
        $('html').addClass('hide-lightbox');

    });
}

smoothScroll = function () {

    $('.pri-menu__menu-item a, .siteLogo, .header-ctner__siteLogo').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 0
        }, 900, 'swing');
    });
}

jQuery(document).ready(bugherAnimation);
jQuery(document).ready(flickitySliders);
jQuery(document).ready(tabFuntion);
jQuery(document).ready(showPortfolioRow);
jQuery(document).ready(customLightBox);
jQuery(document).ready(smoothScroll);
