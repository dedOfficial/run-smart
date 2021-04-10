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
});

