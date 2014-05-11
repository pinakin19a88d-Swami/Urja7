/*  */
$(document).ready(function(){
	// ---------- Main Navigation AJAX Fuctions ----------
	$("#aboutNav, #aboutFtNav").click(function(){
		$("#bodyContent").load("ajax/aboutUsContent.html");
		$("ul > li").removeClass("active");
		$("#aboutNav, #aboutFtNav").parent().addClass("active");
	});
	$("#blogNav, #blogFtNav").click(function(){
		$("#bodyContent").load("ajax/blogContent.html");
		$("ul > li").removeClass("active");
		$("#blogNav, #blogFtNav").parent().addClass("active");
	});

	// ---------- Side Navigation AJAX Fuctions ----------
	$("#energySideNav").click(function(){
		$("#bodyContent").load("ajax/energyContent.html");
		$("ul > li").removeClass("active");
	});
	$("#energySideNav > a").click(function(){
		$("#bodyContent").load("ajax/energyContent.html");
		$("ul > li").removeClass("active");
	});
	$("#pumpingSideNav").click(function(){
		$("#bodyContent").load("ajax/pumpingContent.html");
		$("ul > li").removeClass("active");
	});
	$("#pumpingSideNav > a").click(function(){
		$("#bodyContent").load("ajax/pumpingContent.html");
		$("ul > li").removeClass("active");
	});
	$("#optSideNav").click(function(){
		$("#bodyContent").load("ajax/optContent.html");
		$("ul > li").removeClass("active");
	});
	$("#optSideNav > a").click(function(){
		$("#bodyContent").load("ajax/optContent.html");
		$("ul > li").removeClass("active");
	});
	$("#productSideNav, #productSideNav > a").click(function(){
		$("#bodyContent").load("ajax/productContent.html");
		$("ul > li").removeClass("active");
	});
	// $("#productSideNav > a").click(function(){
	// 	$("#bodyContent").load("ajax/productContent.html");
	// 	$("ul > li").removeClass("active");
	// });

	$(".iconBtn a").click(function(){
		$("#bodyContent").load("ajax/household.html");
		$("ul > li").removeClass("active");
	});
			  
});