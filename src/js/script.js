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

