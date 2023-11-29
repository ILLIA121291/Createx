$(function () {

// "Our Main Directions" Section - Start
  var mixer = mixitup('.our_main_directions_courses');

  $('.our_main_directions_filter_list_item').on('click', function () {
    $('.our_main_directions_filter_list_item').removeClass('our_main_directions_filter_first_buttom')
    $(this).addClass('our_main_directions_filter_first_buttom')
  })
// "Our Main Directions" Section - End 

// "Meet our team" Section - Start
  $('.team_block_two_team_slader').slick({
    arrows: false,
    slidesToShow: 4,
    infinity: true,
    draggable:false,
    appendArrows: $('.team_block_one_buttoms_slider'),
    waitForAnimate: false,
    responsive:
    [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        },
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
        },
      },

      
    ]
  }) 

  $('.slider_prev').on('click', function (e) {
    e.preventDefault()
    $('.team_block_two_team_slader').slick('slickPrev')
  })

  $('.slider_next').on('click', function (e) {
    e.preventDefault()
    $('.team_block_two_team_slader').slick('slickNext')
  })
// "Meet our team" Section - End

// "Testimonials" Section - Start
  $('.testimonials_slider').slick({
  arrows: false,
  slidesToShow: 1,
  infinity: true,
  draggable:false,
  waitForAnimate: false,
  dots:true,
  appendDots:$('.testimonials_slider_dots'),
  }) 
  
  $('.testimonials_prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials_slider').slick('slickPrev')
  })

  $('.testimonials_next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials_slider').slick('slickNext')
  })
// "Testimonials" Section - End

// "Course program" - Section - Start

  $('.course_acc_line_link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('course_acc_line_link_active')
    $(this).children('.course_acc_line_text').slideToggle()
  })

// "Course program" - Section - End


//  "Soft scrolling site" - Start
$('.header_block_top_navigation_list, a').on('click', function (e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top - 100;
    $('body,html').animate({scrollTop: top}, 1500)
  });
  
// "Soft scrolling site" - End

// "Burger Manue" - Start
$('.burger_manue, .overlay, .header_block_top a').on('click', function (e) {
  e.preventDefault()
  $('.header_block_top').toggleClass('header_block_top_open')
  $('.burger_manue').toggleClass('burger_manue_open')
  $('.overlay').toggleClass('overlay_open')
  $('.burger_manu_span').toggleClass('burger_manu_span_open')
}) 

// "Burger Manue" - End





})