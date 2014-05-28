/*  */
$(document).ready(function(){
	// ---------- Main Navigation AJAX Fuctions ----------
	$("#aboutNav, #aboutFtNav").click(function(){
		$("#bodyContent").load("ajax/aboutUsAjax.html");
		$("ul > li").removeClass("active");
		$("#aboutNav, #aboutFtNav").parent().addClass("active");
		$(".nextArrow").css("display","none");
	});

	$("#resourceNav, #resourceFtNav").click(function(){
		$("#bodyContent").load("ajax/resource1Ajax.html");
		$("ul > li").removeClass("active");
		$("#resourceNav, #resourceFtNav").parent().addClass("active");
		$(".nextArrow").attr("href","resource2Ajax.html");
		$(".nextArrow").css("display","block");
	});

	$("#careersNav, #careersFtNav").click(function(){
		$("#bodyContent").load("ajax/careersAjax.html");
		$("ul > li").removeClass("active");
		$("#careersNav, #careersFtNav").parent().addClass("active");
		$(".nextArrow").css("display","none");
	});

	$("#contactNav, #contactFtNav").click(function(){
		$("#bodyContent").load("ajax/contactAjax.html");
		$("ul > li").removeClass("active");
		$("#contactNav, #contactFtNav").parent().addClass("active");
		$(".nextArrow").css("display","none");
	});
	
	$("#blogNav, #blogFtNav").click(function(){
		$("#bodyContent").load("ajax/blogAjax.html");
		$("ul > li").removeClass("active");
		$("#blogNav, #blogFtNav").parent().addClass("active");
		$(".nextArrow").attr("href","blog2Ajax.html");
		$(".nextArrow").css("display","block");
	});


	// ---------- Consecutive Pages AJAX Fuctions ----------
	$(".nextArrow").click(function(){
		var href = $(this).attr('href');
		if(href == "blog2Ajax.html")
		{
			$(".nextArrow").attr("href","blog3Ajax.html");
		}
		$("#bodyContent").load("ajax/"+href);
		$("ul > li").removeClass("active");
		$("#blogNav, #blogFtNav").parent().addClass("active");
	});

	// ---------- Side Navigation AJAX Fuctions ----------
	$("#energyNav, #energySideNav, #energySideNav > a").click(function(){
		$("#bodyContent").load("ajax/energyAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	$("#pumpingNav, #pumpingSideNav, #pumpingSideNav > a").click(function(){
		$("#bodyContent").load("ajax/pumpingAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	$("#optNav, #optSideNav, #optSideNav > a").click(function(){
		$("#bodyContent").load("ajax/optAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	$("#productNav, #productSideNav, #productSideNav > a").click(function(){
		$("#bodyContent").load("ajax/productAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	
	// ---------- Aside Navigation AJAX Fuctions ----------
	$("#aside1").click(function(){
		$("#bodyContent").load("ajax/householdAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	$("#aside2").click(function(){
		$("#bodyContent").load("ajax/farmersAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	$("#aside3").click(function(){
		$("#bodyContent").load("ajax/communityAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	$("#aside4").click(function(){
		$("#bodyContent").load("ajax/businessAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	$("#aside5").click(function(){
		$("#bodyContent").load("ajax/publicVoluntaryAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
	$("#aside6").click(function(){
		$("#bodyContent").load("ajax/urjaFutureAjax.html");
		$("ul > li").removeClass("active");
		$(".nextArrow").css("display","none");
	});
			  
});