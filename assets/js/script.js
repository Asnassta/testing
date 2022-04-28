function tabsNews(n)
{
  $('.previews_news .tabs-nav a').removeClass('active');
  $('.previews_news .tabs-nav a.t'+n).addClass('active');
  $('.previews_news .tabs-block').fadeOut(0);
  $('.previews_news .tabs-block.tab_'+n).fadeIn(222);
};

function tabsActual(n)
{
  $('.previews_actual .tabs-nav a').removeClass('active');
  $('.previews_actual .tabs-nav a.t'+n).addClass('active');
  $('.previews_actual .tabs-block').fadeOut(0);
  $('.previews_actual .tabs-block.tab_'+n).fadeIn(222);
};
function tabsInterest(n)
{
  $('.previews_interest .tabs-nav a').removeClass('active');
  $('.previews_interest .tabs-nav a.t'+n).addClass('active');
  $('.previews_interest .tabs-block').fadeOut(0);
  $('.previews_interest .tabs-block.tab_'+n).fadeIn(222);
};


$(document).ready(function() {
	/*======Menu-toggle=============*/
  $(".burger").on("click", function() {

    if($('.wrapper').hasClass('active'))
    {
      $('.bgactive').remove();
    }
    else
    {
      $('.wrapper').append('<div style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 91;" class="bgactive"></div>');
    }

    $(".header-menu").slideToggle();
    $(".header-menu").addClass('active');
    $(".wrapper").toggleClass('active');
    $(this).toggleClass("active");

  });


  $(document).on("click",  ".bgactive", function(){ 
      if($('.burger').hasClass('active'))
      {
        $('.burger.active').click();
        
      } 
  });
  /*==========/menu-toggle=========*/

  /*======Search-drop=============*/
  $(".header__search").on("click", function(event) {
    event.preventDefault()

    if($('.wrapper').hasClass('active'))
    {
      $('.bgactive').remove();
    }
    else
    {
      $('.wrapper').append('<div style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 91;" class="bgactive"></div>');
    }

    $(".search-drop").slideToggle();
    $(".search-drop").addClass('active');
    $(".wrapper").toggleClass('active');
    $(this).toggleClass("active");

  });

  $(document).on("click",  ".bgactive", function(){ 
      if($('.header__search').hasClass('active'))
      {
        $('.header__search.active').click();
        
      } 
   
  });
  
$(".search-drop__close").on("click", function(){ 
       if($('.wrapper').hasClass('active'))
    {
      $('.bgactive').remove();
    }
    else
    {
      $('.wrapper').append('<div style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 91;" class="bgactive"></div>');
    }

    $(".search-drop").slideToggle();
    $(".search-drop").removeClass('active');
    $(".wrapper").toggleClass('active');
    $('.header__search').toggleClass("active");
   
  });
  /*==========/search-drop=========*/

  /*======Social-dropdown=============*/
  $(function(){
    if ($(window).width() < 900){
        $(".social__share").on("click", function() {
          $(".social-dropdown").fadeToggle();
        });
    }
    else{
        $(".social__share").hover(function() {
    		$(".social-dropdown").fadeToggle(333);
  		});
    }
});
  $(document).on("click", function(e){ 
		let share = $( ".social__share" ); 
		if ( !share.is(e.target) 
		    && share.has(e.target).length === 0 ) { 
			$(".social-dropdown").fadeOut(333);
		}
	});
  /*==========/social-dropdown=========*/

  /*======Invite__item (accordion)=============*/
  $(".invite__title").on("click", function() {
    $(this).toggleClass("active");
    $(this).next().slideToggle(333);

  });

  /*==========/invite__item (accordion)=========*/

  /*======Footer-menu (accordion)=============*/
  $(".footer-menu__block_drop .footer-menu__title").on("click", function() {
    $(this).toggleClass("dropdown");
    $(this).next().slideToggle(333);

  });
  /*==========/footer-menu (accordion)=========*/

  /*======Page-nav (drop)=============*/
  function navDrop()
{
  if ($(window).width() <= 1200){
        $(".page-nav").on("click", function() {
          $(".page-nav__links").slideToggle();
          $(".page-nav__title-mobile").toggleClass('dropdown');
        });
    }
}

  $(window).resize(function(){
    navDrop();
  });

      navDrop();
  /*==========/page-nav (drop)=========*/

  /*======Page-info__more=============*/
  $(".page-info__more").on("click", function() {
    $(this).toggleClass("drop");
    $(".page-info__text-dots").fadeToggle();
    $(".page-info__text-more_line").toggleClass('show');
    $(".page-info__text-more").slideToggle();
  });
  /*==========/page-info__more=========*/

  /*======Comments=============*/
  $(".comments-item__btn").on("click", function(event) {
    event.preventDefault()
    $(".comments-response").slideDown();

  });
  $(".comments-response__close").on("click", function(event) {
    event.preventDefault()
    $(".comments-response").slideUp();

  });
  /*==========/comments=========*/

  /*======Data-nav (dropdown)=============*/
  $(".data-nav__choice").on("click", function() {
    $(this).toggleClass("drop");
    $(".data-nav__dropdown").slideToggle(333);

  });
  /*==========/data-nav (dropdown)=========*/

  /*======Article-box__details=============*/
  $(".article-box__details").on("click", function() {
    $(this).toggleClass("drop");
    $(this).parents(".article-box").find(".article-box__text-details").slideToggle();
  });
  /*==========/article-box__details=========*/

  /*======Article-reviews__show=============*/
  $(".article-reviews__show").on("click", function(event) {
    event.preventDefault();
    $(".article-reviews__hide").slideToggle(333);

  });
  /*==========/article-reviews__show=========*/

  /*===============overview-modal=================*/
  $(".overview-open").on("click", function(event) {
    event.preventDefault();
    $(".overview-modal").fadeIn(333);
 
    $('.overview-modal').css('top', $(window).scrollTop()+'px');
    $(".overview-modal__inner").fadeIn(333);
    $('body').addClass("hidden");
  });
  $(".overview-modal__close,  .closex").on("click", function(event) {
    event.preventDefault();
    $(".overview-modal").fadeOut('222');
    $('body').removeClass("hidden");
  });
/*==============/overview-modal=================*/

  /*===========Slider-Intro============*/
  $('.intro__slider').slick({
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	prevArrow: $('.intro__arrow .slider-arrow_prev'),
  	nextArrow: $('.intro__arrow .slider-arrow_next'),
  	responsive: [
     {
       breakpoint: 1401,
      settings: {
        infinite: true,
  		dots: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
    }
      }
  ]
	});
  /*===========/slider-intro============*/

    /*===========Critics-quote__slider============*/
    $('.critics-quote__slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $('.critics-quote__pagin').html(i + '/' + slick.slideCount);
  });

  $('.critics-quote__slider').slick({
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	prevArrow: $('.critics-quote__nav .slider-arrow_prev'),
  	nextArrow: $('.critics-quote__nav .slider-arrow_next'),
  	responsive: [
     {
       breakpoint: 766,
      settings: {
        infinite: true,
  		dots: true,
  		arrows: false,
  		slidesToShow: 1,
  		slidesToScroll: 1,
    }
      }
  ]
	});
  /*===========/critics-quote__slider============*/
  /*===========Slider-Critics============*/
  function critics()
{
  if($('.critics__slider').hasClass('slick-slider'))
  {
    $('.critics__slider').slick('unslick');
  }
  
  if ($(window).width() < 415){
    $('.critics__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    });
  }
}

  $(window).resize(function(){
    critics();
  });

      critics();
  /*===========/slider-critics============*/

  /*===========Slider-article-about============*/
  function articleAbout()
{
  if($('.article-about__slider').hasClass('slick-slider'))
  {
    $('.article-about__slider').slick('unslick');
  }
  
  if ($(window).width() < 766){
    $('.article-about__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    });
  }
}

  $(window).resize(function(){
    articleAbout();
  });

      articleAbout();
  /*===========/article-about============*/
})