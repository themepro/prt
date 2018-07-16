$(document).ready(function(){
    $('.venobox').venobox();
    //venobox js end //
    var containerEl = document.querySelector('.portfolio-image');

            var mixer = mixitup(containerEl); 

     //filter js end //
	     var owl = $('.owl-test');
	owl.owlCarousel({
	    items:2,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:1500,
	    autoplayHoverPause:true,
      responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            loop:false
        }
    }
	  
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	})
	//owl carousel js end //
	$('.counter').countUp();
	
	var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

  //counter js end //

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
          };
        });
      }
    }
  });

//nice scroll js end //
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 400) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '1000');
});
$(window).stellar({
	horizontalScrolling: false,
	responsive: true,
});
//topto js end //

});
$('body').scrollspy({ target: '#navbarSupportedContent' })

//scrollspy js end //

$(window).scroll(function(){
                      if($(this).scrollTop() > 220){
                          $('header').addClass('black');
                      }
                      else{
                         $('header').removeClass('black'); 
                      }
                  })
      AOS.init({
        easing: 'ease-in-out-sine'
      });

//manu scroll js end //
  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };


    











