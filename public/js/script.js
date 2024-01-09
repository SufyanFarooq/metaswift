



 $(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                 });
  });


 $('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-angle-down fa-angle-left");
});


   $(document).ready(function() {
	$('.accordion').find('.accordion-toggle').click(function() {
		$(this).next().slideToggle('600');
		$(".accordion-content").not($(this).next()).slideUp('600');
	});
	$('.accordion-toggle').on('click', function() {
		$(this).toggleClass('active').siblings().removeClass('active');
	});
});






$(document).ready(function(){
  $('.payment').owlCarousel({
    loop:true,
    margin:30,
	autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	dots:false,
    nav:false,
	 
	 
    responsive:{
        0:{
            items:1
        },
		320:{
            items:1
        },
		480:{
            items:2
        },
        600:{
            items:3
        },
		767:{
            items:4
        },
		991:{
            items:5
        },
        1200:{
            items:5
        } 
		 
    }
});
 
});	




$(document).ready(function(){
  $('.withdraw-carousel').owlCarousel({
    loop:true,
    margin:20,
	autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	dots:false,
    nav:true,
	navText:  ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
	 
	 
    responsive:{
        0:{
            items:1
        },
		320:{
            items:1
        },
		480:{
            items:1
        },
        600:{
            items:1
        },
		767:{
            items:1
        },
		992:{
            items:2
        },
        1200:{
            items:2
        } 
		 
    }
});
 
});	


$(document).ready(function(){
  $('.dash-stat-carousel').owlCarousel({
    loop:true,
    margin:10,
	autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
	dots:false,
    nav:true,
	navText:  ["<i class='fa-solid fa-caret-left'></i>","<i class='fa-solid fa-caret-right'></i>"],
	 
	 
    responsive:{
        0:{
            items:1
        },
		320:{
            items:1
        },
		480:{
            items:1
        },
        600:{
            items:2
        },
		767:{
            items:3
        },
		992:{
            items:4
        },
        1200:{
            items:5
        } 
		 
    }
});
 
});	





$(document).ready(function(){
  $('.ref-stat-carousel').owlCarousel({
    loop:true,
    margin:10,
	autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
	dots:false,
    nav:false,
	
	 
	 
    responsive:{
        0:{
            items:1
        },
		320:{
            items:1
        },
		480:{
            items:1
        },
        600:{
            items:2
        },
		767:{
            items:3
        },
		992:{
            items:3
        },
        1200:{
            items:3
        } 
		 
    }
});
 
});	
