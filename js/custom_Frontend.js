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
	$("#energySideNav, #energySideNav > a").click(function(){
		$("#bodyContent").load("ajax/energyContent.html");
		$("ul > li").removeClass("active");
	});
	$("#pumpingSideNav, #pumpingSideNav > a").click(function(){
		$("#bodyContent").load("ajax/pumpingContent.html");
		$("ul > li").removeClass("active");
	});
	$("#optSideNav, #optSideNav > a").click(function(){
		$("#bodyContent").load("ajax/optContent.html");
		$("ul > li").removeClass("active");
	});
	$("#productSideNav, #productSideNav > a").click(function(){
		$("#bodyContent").load("ajax/productContent.html");
		$("ul > li").removeClass("active");
	});
	
	// ---------- Aside Navigation AJAX Fuctions ----------
	$("#aside1").click(function(){
		$("#bodyContent").load("ajax/household.html");
		$("ul > li").removeClass("active");
	});
	$("#aside2").click(function(){
		$("#bodyContent").load("ajax/farmers.html");
		$("ul > li").removeClass("active");
	});
	$("#aside3").click(function(){
		$("#bodyContent").load("ajax/Community.html");
		$("ul > li").removeClass("active");
	});
	$("#aside4").click(function(){
		$("#bodyContent").load("ajax/Business.html");
		$("ul > li").removeClass("active");
	});
	$("#aside5").click(function(){
		$("#bodyContent").load("ajax/farmers.html");
		$("ul > li").removeClass("active");
	});
			  
});