$(document).ready(() => {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
    $('[data-toggle="tooltip"]').tooltip();
    //=====menu mobile=========//
    $('[data-toggle]').on('click', function () {
        let toggle_name = $(this).data('toggle');
        let target_name = $(this).data('target');
        let target_element = $(
            '[data-toggle="showbox"][data-target="' + target_name + '"]'
        );

        if (toggle_name == 'openbox') {
            let target_status = target_element.data('status');
            $(
                '[data-toggle="showbox"]:not([data-target="' + target_name + '"])'
            ).attr('data-status', false);

            if (target_status == false) {
                target_element.attr('data-status', true);
            } else {
                target_element.attr('data-status', false);
            }
        } else if (toggle_name == 'closebox') {
            target_element.attr('data-status', false);
        }
    });
    $(document).on('click', function () {
        $('[data-toggle="showbox"]').attr('data-status', false);
    });
    $(document).on('keyup', function (e) {
        if (e.key === 'Escape') {
            $('[data-toggle="showbox"]').attr('data-status', false);
        }
    });
    $('[data-toggle="showbox"],[data-toggle="openbox"]').click(function (
        event
    ) {
        event.stopPropagation();
    });
    //=====end menu mobile======//

    //============tab=========================//

    $(document).on('click', '[data-tab]', function () {
        let $this = $(this),
            tab = $this.data('tab'),
            target = $this.data('tab-target');

        $('[data-tab][data-tab-target="' + target + '"]').removeClass('active');
        $this.addClass('active');
        $('[data-tab-content][data-tab-target="' + target + '"]').removeClass('active');
        $('[data-tab-content="' + tab + '"][data-tab-target="' + target + '"]').addClass('active');
    });
    //==================end tab================//

    //========== slider ==============//

    var list_gallery = new Swiper('.gallery-product__wrapper__slider__list .swiper-container', {
        spaceBetween: 20,
        slidesPerView: 2.3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickSlide: true,
        breakpoints: {
            992: {
                slidesPerView: 7.3,
            },

            768: {
                slidesPerView: 5.3,
            },
            480: {
                slidesPerView: 4.3,
            },
            360: {
                slidesPerView: 3.3,
            },
        },

    });
    var show_gallery = new Swiper('.gallery-product__wrapper__slider__show .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-btn-next',
            prevEl: '.swiper-btn-prev',
        },
        thumbs: {
            swiper: list_gallery
        }
    });
    //==============end slider===============//
    //=======countdowun=====//


    function countDownTimer(delay) {
        var d = new Date();
        var n = d.getSeconds();
        d.setSeconds(n + parseInt(delay));
        $('#clock').countdown(d)
            .on('update.countdown', (e) => {
                $(e.currentTarget).html(e.strftime('ارسال مجدد کد تا <span> %-S </span>دیگر'));
            })
            .on('finish.countdown', (e) => {
                $(e.currentTarget).html('<a class="resend_token" href="#">ارسال مجدد کد</a>')
            });

    }
    countDownTimer(10);
    $(document).on('click', '.resend_token', function () {
        countDownTimer(10);
    });
    //=========end countdowun=========//

    //============color===============//
    $('[data-color]').each((i, e) => {
        let color = $(e).data('color');
        $(e).css('color', color);
    })
    $('[data-bg-color]').each((i, e) => {
        let color = $(e).data('bg-color');
        let shadow = $(e).data('box-shadow');
        $(e).css('background-color', color);
        $(e).css('box-shadow', '0 10px 45px 10px' + shadow);
    })
    //=============end color===========//
    //====inview====//
    inView('main > section').on('enter', el => {
        $(el).addClass("inview")
    }).on('exit', el => {
        $(el).removeClass("inview")
    });  
    var toolbar_slider;
    $(document).on("click", ".toolbar__wrapper ul li ", function () {
        if ($(this).hasClass("content")) {
            let html = `<section class="toolbar-content">
            <div class="toolbar-content__wrapper">
                <div class="toolbar-content__wrapper__slider">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab toolbar-content__wrapper__slider__tab--xbox"
                                    data-slider="tab1" data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab__text">
                                        <div class="toolbar-content__wrapper__slider__tab__text__icon">
                                            <i class="dn-xbox"></i>
                                        </div>
                                        <div class="toolbar-content__wrapper__slider__tab__text__title">
                                            <h3>ایکس باکس</h3>
                                        </div>
                                    </div>
                                    <div class="toolbar-content__wrapper__slider__tab__left">
                                        <div class="toolbar-content__wrapper__slider__tab__left__number">
                                            <span>۱۳۰</span>
                                        </div>
                                        <div class="toolbar-content__wrapper__slider__tab__left__button">
                                            <a href="#">آرشیو</a>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab1"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"> <img src="./assets/img/toolbar1.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab1"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"> <img src="./assets/img/toolbar2.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab1"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"><img src="./assets/img/toolbar3.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab1"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"> <img src="./assets/img/toolbar4.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab1"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"><img src="./assets/img/toolbar5.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab toolbar-content__wrapper__slider__tab--play-station"
                                    data-slider="tab2" data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab__text">
                                        <div class="toolbar-content__wrapper__slider__tab__text__icon">
                                            <i class="dn-play-station"></i>
                                        </div>
                                        <div class="toolbar-content__wrapper__slider__tab__text__title">
                                            <h3>پلی استیشن</h3>
                                        </div>
                                    </div>
                                    <div class="toolbar-content__wrapper__slider__tab__left">
                                        <div class="toolbar-content__wrapper__slider__tab__left__number">
                                            <span>85</span>
                                        </div>
                                        <div class="toolbar-content__wrapper__slider__tab__left__button">
                                            <a href="#">آرشیو</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab2"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"><img src="./assets/img/toolbar1.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab2"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"><img src="./assets/img/toolbar2.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab2"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"><img src="./assets/img/toolbar3.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab2"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"> <img src="./assets/img/toolbar4.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab2"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"> <img src="./assets/img/toolbar5.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab toolbar-content__wrapper__slider__tab--stim"
                                    data-slider="tab3" data-slider-target="tab-sidebar" data-slider="tab3"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab__text">
                                        <div class="toolbar-content__wrapper__slider__tab__text__icon">
                                            <i class="dn-stim"><span class="path1"></span><span class="path2"></span></i>
                                        </div>
                                        <div class="toolbar-content__wrapper__slider__tab__text__title">
                                            <h3>استیم</h3>
                                        </div>
                                    </div>
                                    <div class="toolbar-content__wrapper__slider__tab__left">
                                        <div class="toolbar-content__wrapper__slider__tab__left__number">
                                            <span>110</span>
                                        </div>
                                        <div class="toolbar-content__wrapper__slider__tab__left__button">
                                            <a href="#">آرشیو</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab3"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"><img src="./assets/img/toolbar1.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab3"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"> <img src="./assets/img/toolbar2.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab3"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"> <img src="./assets/img/toolbar3.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab3"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"><img src="./assets/img/toolbar4.png" alt=""></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab-content" data-slider-content="tab3"
                                    data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab-content__item">
                                        <a href="#"><img src="./assets/img/toolbar5.png" alt=""></a>
        
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="toolbar-content__wrapper__slider__tab toolbar-content__wrapper__slider__tab--stim"
                                    data-slider="tab4" data-slider-target="tab-sidebar">
                                    <div class="toolbar-content__wrapper__slider__tab__text">
                                        <div class="toolbar-content__wrapper__slider__tab__text__icon">
                                            <i class="dn-stim"><span class="path1"></span><span class="path2"></span></i>
                                        </div>
                                        <div class="toolbar-content__wrapper__slider__tab__text__title">
                                            <h3>استیم</h3>
                                        </div>
                                    </div>
                                    <div class="toolbar-content__wrapper__slider__tab__left">
                                        <div class="toolbar-content__wrapper__slider__tab__left__number">
                                            <span>۱۳۰</span>
                                        </div>
                                        <div class="toolbar-content__wrapper__slider__tab__left__button">
                                            <a href="#">آرشیو</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
            let $this = $(this);
            if ($this.hasClass("active")) {
                $this.removeClass("active");
                $(".toolbar-content").remove();
            }
            else {
                $(".toolbar__wrapper ul li a").removeClass("active")
                $(".toolbar-content").remove();
                $this.addClass("active");
                $("main > section.inview").eq(0).after(html);
            }
            toolbar_slider = new Swiper('.toolbar-content__wrapper__slider .swiper-container', {
                spaceBetween: 0,
                slidesPerView: "auto",
            });
        }



    })
    //===end inview=====/
    //===pagination:blog-page=====//
    $('.blog-content__page-number ul li a ').on('click', function () {
        $('.blog-content__page-number ul li a ').removeClass('active');
        $(this).addClass('active');
    });
    //===end pagination:blog-page=====//

    //===data-slider=====//
    $(document).on('click', '[data-slider]', function () {
        let $this = $(this),
            slider = $this.data('slider'),
            target = $this.data('slider-target');
        if ($this.hasClass("active")) {
            $this.removeClass("active");
            $('[data-slider-content][data-slider-target="' + target + '"]').removeClass('active');
        }
        else {
            $('[data-slider][data-slider-target="' + target + '"]').removeClass('active');
            $this.addClass('active');
            $('[data-slider-content][data-slider-target="' + target + '"]').removeClass('active');
            $(
                '[data-slider-content="' + slider + '"][data-slider-target="' + target + '"]'
            ).addClass('active');
        }
        toolbar_slider.update();
    });
    //====end data-slider===//
    //======ajax======//
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    //======end ajax======//
    // plus or minus product//
    $(document).on("click", ".cart-context__wrapper__item__text__info__right ul li p i", function () {
        var $this = $(this),
            type = $this.attr("data-type"),
            input = $this.closest(".cart-context__wrapper__item__text__info__right ul li p").find("input"),
            value = parseInt(input.val()),
            min = input.attr('min'),
            max = input.attr('max'),
            number = $this.closest(".cart-context__wrapper__item__text__info__right ul li p").find("span");
        if (type == "minus") {
            if (value > min) {
                value--;
            }
        }
        else if (type == "plus") {
            if (value < max) {
                value++;
            }
        }
        number.html(value);
        input.val(value);
    })
    // end plus or minus product//
    //=====delete cart=====//
    $(document).on("click", ".cart-context__wrapper__item__delete i", function () {
        $(this).closest(".cart-context__wrapper__item").remove();
    })
    //===== end delete cart=====//
    //=====login=====//
    $(document).on("click", ".login__wrapper__content__form__item__register button", function () {
        $(this).closest(".login__wrapper").addClass("code");
        $(this).html("اعتبار سنجی و ورود");
        // $(this).type("submit");
    })
    //=====end login=====//
});