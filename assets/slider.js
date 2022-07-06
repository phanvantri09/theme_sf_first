$(document).ready(function(){
    $('.image-slider-about').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
        dots: false,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                  dots: true,
                }
              }, 
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                  dots: true,
                }
              }, 
        ]
    });
    // $('.filtering').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 4,

    //   prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    //   nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    // });
    $('.image-slider-rubaby').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        // centerMode: true,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 1500,
        draggable: false,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
        dots: false,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                  dots: true,
                }
              }, 
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                  dots: true,
                }
              }, 
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true,
                }
              }, 
        ]
    });
    $('.image-slider-blog').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        // centerMode: true,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 1500,
        draggable: false,
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
        dots: false,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  arrows: false,
                  dots: true,
                }
              }, 
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                  dots: true,
                }
              }, 
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true,
                }
              }, 
        ]
    });
    $('.image-slider-rubb').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: true,
      // centerMode: true,
      arrows: false,
      // autoplay: true,
      // autoplaySpeed: 1500,
      draggable: false,
      prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
      nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
      dots: false,
      responsive:[
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
              }
            }, 
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
              }
            }, 
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            }, 
      ]
    });
    $('.image-slider-featured').slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      infinite: true,
      // centerMode: true,
      arrows: true,
      // autoplay: true,
      // autoplaySpeed: 1500,
      draggable: false,
      prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
      nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
      dots: false,
      responsive:[
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
              }
            }, 
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
              }
            }, 
      ]
    });
  });
