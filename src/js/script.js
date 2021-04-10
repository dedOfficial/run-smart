const slider = tns({
    container: '.carousel__inner',
    controls: false,
    nav: false,
    navPosition: 'bottom',
    items: 1,
    autoWidth: true,
    autoplay: false,
    center: true,
    gutter: 200,
    autoHeight: true,
    speed: 750,
    responsive: {
        250: {
            nav: true,
            autoHeight: false,
            autoWidth: false,
        },
        1025: {
            autoHeight: true
        }
    }
});


document.querySelector('.prev').addEventListener('click', () =>{
    slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', () =>{
    slider.goTo('next');
});

$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.catalog__wrap').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    function toggleSlide(selector) {
        $(selector).each(function(index) {
            $(this).on('click', function(event){
                event.preventDefault();
                $('.catalog-item__content').eq(index).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(index).toggleClass('catalog-item__list_active');
            });
        });
    }

    // Modal
    $('[data-modal="consultation"]').on('click', () => {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #fhanks, #order').fadeOut();
    });

    $('.btn_s-plus').each(function(index) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(index).text());
            $('.overlay, #order').fadeIn();
        });
    });


    function validate(selector) {
        $(selector).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите ваше имя",
                    minlength: jQuery.validator.format("Ваше имя не может быть короче {0} символов!")
                },
                phone: {
                    required: "Пожалуйста, введите ваш номер телефона",
                },
                email: {
                    required: "Пожалуйста, введите ваш e-mail",
                    email: "Ваш e-mail адрес должен иметь вид: name@domain.com",
                }
            },
        });
    }

    validate('.consultation__wrap .form');
    validate('#consultation .form');
    validate('#order .form');

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
});

