/*$(window).load(function()
{
	$('#intro').addClass("animated fadeInUp");
});	*/

$(window).scroll(function () {
	
    var sT = $(window).scrollTop();
    if(sT>300)
    {
      /alert('sami')*/
        $('#back-top')
		.css({'opacity':'1'})
		.css('transition-duration','0.5s')
    }
    else 
    {
        $('#back-top')
		.css({'opacity':'0'})
		.css('transition-duration','0.5s')
    }

});


$(document).ready(function(){
//	alert('sami')
    $("#click1").click(function(){
	$(".click1").slideToggle("slow");
//	$('.menu').addClass("animated fadeIn");		
  });
	$("#click2").click(function(){
	$(".click2").slideToggle("slow");
//	$('.menu').addClass("animated fadeIn");		
  });
	$("#click3").click(function(){
	$(".click3").slideToggle("slow");
//	$('.menu').addClass("animated fadeIn");		
  });
  $("#click4").click(function(){
	$(".click4").slideToggle("slow");
//	$('.menu').addClass("animated fadeIn");		
  });
  $("#click5").click(function(){
	$(".click5").slideToggle("slow");
//	$('.menu').addClass("animated fadeIn");		
  });
  $("#click6").click(function(){
	$(".click6").slideToggle("slow");
//	$('.menu').addClass("animated fadeIn");		
  });
  $("#click7").click(function(){
	$(".click7").slideToggle("slow");
//	$('.menu').addClass("animated fadeIn");		
  });
  /*$("#mobile_nav").click(function(){
	$(".nav").slideToggle( "slow", "linear" );
  });*/
});

$(document).load(function(){
	$('.action').addClass('action animated fadeInRight');
	$('.action1').addClass('action animated shake');
});


/*$(window).scroll(function(){
        var wt= $(window).scrollTop();
		
        var intro = $('#intro').offset().top;
        var hm = $('#home').offset().top;
        var ab = $('#about').offset().top;
        var pro = $('#products').offset().top;
        var off = $('#offers').offset().top;
		var con = $('#contact').offset().top;
		var br = $('#brouchre').offset().top;
		var vi = $('#videos').offset().top;
		var gal = $('#gallery').offset().top;


        if (wt>=intro-300 && wt<hm-300)
        {   
    
            $("#page1").addClass("current");
			$('#intro').addClass("animated fadeInUp");
			$("#page2").removeClass("current");
			$("#page3").removeClass("current");
			$("#page4").removeClass("current");
			$("#page5").removeClass("current");
			$("#page6").removeClass("current");
			$("#page7").removeClass("current");
			$("#page8").removeClass("current");
			$("#page9").removeClass("current");
			$("#gallery").removeClass("animated fadeInUp");
        }
    
        else if (wt>=hm-300 && wt<ab-300)
        {
            $("#page1").removeClass("current");
			$('#intro').removeClass("animated fadeInUp");
			$("#page2").addClass("current");
			$('#home').addClass("animated shake");
			$("#page3").removeClass("current");
			$("#page4").removeClass("current");
			$("#page5").removeClass("current");
			$("#page6").removeClass("current");
			$("#page7").removeClass("current");
			$("#page8").removeClass("current");
			$("#page9").removeClass("current");
        }
        
        else if (wt>=ab-300 && wt<pro-300)
        {
            $("#page1").removeClass("current");
			$("#page2").removeClass("current");
			$('#home').removeClass("animated shake");
			$("#page3").addClass("current");
			$("#about").addClass("animated bounce");
			$("#page4").removeClass("current");
			$("#page5").removeClass("current");
			$("#page6").removeClass("current");
			$("#page7").removeClass("current");
			$("#page8").removeClass("current");
			$("#page9").removeClass("current");
        }
        
        else if (wt>=pro-300 && wt<off-300)
        {
            $("#page1").removeClass("current");
			$("#page2").removeClass("current");
			$("#page3").removeClass("current");
			$('#about').removeClass("animated bounce");
			$("#page4").addClass("current");
			$("#products").addClass("animated fadeInLeft");
			$("#page5").removeClass("current");
			$("#page6").removeClass("current");
			$("#page7").removeClass("current");
			$("#page8").removeClass("current");
			$("#page9").removeClass("current");
        }
		
		else if (wt>=off-300 && wt<con-300)
        {
            $("#page1").removeClass("current");
			$("#page2").removeClass("current");
			$("#page3").removeClass("current");
			$("#page4").removeClass("current");
			$("#products").removeClass("animated fadeInLeft");
			$("#page5").addClass("current");
			$("#offers").addClass("animated fadeInRight");
			$("#page6").removeClass("current");
			$("#page7").removeClass("current");
			$("#page8").removeClass("current");
			$("#page9").removeClass("current");
        }
		
		else if (wt>=con-300 && wt<br-300)
        {
            $("#page1").removeClass("current");
			$("#page2").removeClass("current");
			$("#page3").removeClass("current");
			$("#page4").removeClass("current");
			$("#page5").removeClass("current");
			$("#offers").removeClass("animated fadeInRight");
			$("#page6").addClass("current");
			$("#contact").addClass("animated tada");
			$("#page7").removeClass("current");
			$("#page8").removeClass("current");
			$("#page9").removeClass("current");
        }
		
		else if (wt>=br-300 && wt<vi-300)
        {
            $("#page1").removeClass("current");
			$("#page2").removeClass("current");
			$("#page3").removeClass("current");
			$("#page4").removeClass("current");
			$("#page5").removeClass("current");
			$("#page6").removeClass("current");
			$("#contact").removeClass("animated tada");
			$("#page7").addClass("current");
			$("#brouchre").addClass("animated flipInX");
			$("#page8").removeClass("current");
			$("#page9").removeClass("current");
        }
		
		else if (wt>=vi-300 && wt<gal-300)
        {
            $("#page1").removeClass("current");
			$("#page2").removeClass("current");
			$("#page3").removeClass("current");
			$("#page4").removeClass("current");
			$("#page5").removeClass("current");
			$("#page6").removeClass("current");
			$("#page7").removeClass("current");
			$("#brouchre").removeClass("animated flipInX");
			$("#page8").addClass("current");
			$("#videos").addClass("animated flipInY");
			$("#page9").removeClass("current");
        }
        
        else if(wt >=gal-300)
        {
            $("#page1").removeClass("current");
			$("#page2").removeClass("current");
			$("#page3").removeClass("current");
			$("#page4").removeClass("current");
			$("#page5").removeClass("current");
			$("#page6").removeClass("current");
			$("#page7").removeClass("current");
			$("#page8").removeClass("current");
			$("#videos").removeClass("animated flipInY");
			$("#page9").addClass("current");
			$("#gallery").addClass("animated fadeInUp");
        }
    });*/