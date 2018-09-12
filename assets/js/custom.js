$(function(){

    $('.btn_showmodal').click(function(){
        $('.modal').removeClass("fadeOutUp animated").show().addClass("fadeInUp animated");
        $('.modal-backdrop').show();
        $('#box-overlay').removeClass('blur-out').addClass('blur-in');
        $('.single-title').addClass('inview');
        $('.btn').addClass('inview');
        return false;
    });

    $('.close_modal').click(function(){
        $('.modal').removeClass('fadeInUp animated').addClass('fadeOutUp animated');
        setTimeout(function () {
            $('.modal').hide();
            $('.modal-backdrop').hide();
        }, 500);
        $('#box-overlay').removeClass('blur-in').addClass('blur-out');
        $('.single-title').removeClass('inview');
        $('.btn').removeClass('inview');
       return false;

    });



    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.'
    };
    var countp = new CountUp('count_people', 0, 400, 0, 3, options);
    var countob = new CountUp('count_objects', 0, 50, 0, 5, options);
    var county = new CountUp('count_years', 0, 7, 0, 6, options);
    var ourServicesBlock = false;

    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'inview', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                var $box = $(box);
                if (!ourServicesBlock && $box.hasClass('closest-events_i')) {
                    ourServicesBlock = true;

                    if (!countp.error) {
                        countp.start();
                    } else {
                        console.error(countp.error);
                    }

                    if (!county.error) {
                        county.start();
                    } else {
                        console.error(county.error);
                    }

                    if (!countob.error) {
                        countob.start();
                    } else {
                        console.error(countob.error);
                    }
                }
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    // Scrolling img
    var s = skrollr.init();



    //Slider
    const slider = $(".slick-slider");
    var $pageStatus = $('.gallery-page-info');
    slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $pageStatus.html('<span>' + i + '</span>' + ' / ' + slick.slideCount);
    });
    slider.slick({dots: true});

    slider.on('wheel', (function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));


    /*$('#main-overlay').fullpage({
        scrollBar: true,
        autoScrolling: true,
        scrollOverflow: true
    });*/

    //$("#looped-vid")[0].play();


    $('.darck_arcticle').find('.btn').hover(function(){
       $(this).removeClass('color__w').addClass('color__b');
    },
    function(){
        $(this).removeClass('color__b').addClass('color__w');
    }
    );


    $(document).on('click','.close_menu', function(){
        $('.modal-backdrop').removeClass('fadeInLeft animated').hide();
        $('#main-overlay').removeClass('blur-in').addClass('blur-out');
        $('.main-menu').hide().removeClass('fadeInLeft animated');
        console.log('error');
    });


    $('.show_main-menu').click(function(){
        $('.modal-backdrop').show().addClass('fadeInLeft animated');
        $('#main-overlay').removeClass('blur-out').addClass('blur-in');
        $('.main-menu').show().addClass('fadeInLeft animated');

        setTimeout(function(){
            $('#nav-icon1').toggleClass('open');
            $('#nav-icon1').toggleClass('close_menu');
        }, 200);


    });

    (function(){
        $('.flex-container').waitForImages(function() {
            $('.spinner').fadeOut();
        }, $.noop, true);

        $(".flex-slide").each(function(){
            $(this).hover(function(){
                $(this).find('.flex-title').css({
                    transform: 'rotate(0deg)',
                    top: '10%'
                });
                $(this).find('.flex-about').css({
                    opacity: '1'
                });
            }, function(){
                $(this).find('.flex-title').css({
                    transform: 'rotate(90deg)',
                    top: '15%'
                });
                $(this).find('.flex-about').css({
                    opacity: '0'
                });
            })
        });
    })();


});