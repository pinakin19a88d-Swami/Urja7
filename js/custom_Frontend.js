/*  */
$(document).ready(function(){
	// ---------- Main Navigation AJAX Fuctions ----------
	$("#aboutNav, #aboutFtNav").click(function(){
		$("#bodyContent").load("ajax/aboutUsAjax.html");
		$("ul > li").removeClass("active");
		$("#aboutNav, #aboutFtNav").parent().addClass("active");
	});	

	$("#contactNav, #contactFtNav").click(function(){
		$("#bodyContent").load("ajax/contactAjax.html");
		$("ul > li").removeClass("active");
		$("#contactNav, #contactFtNav").parent().addClass("active");
	});
	
	$("#blogNav, #blogFtNav").click(function(){
		$("#bodyContent").load("ajax/blogAjax.html");
		$("ul > li").removeClass("active");
		$("#blogNav, #blogFtNav").parent().addClass("active");
	});

	// ---------- Side Navigation AJAX Fuctions ----------
	$("#energyNav, #energySideNav, #energySideNav > a").click(function(){
		$("#bodyContent").load("ajax/energyAjax.html");
		$("ul > li").removeClass("active");
	});
	$("#pumpingNav, #pumpingSideNav, #pumpingSideNav > a").click(function(){
		$("#bodyContent").load("ajax/pumpingAjax.html");
		$("ul > li").removeClass("active");
	});
	$("#optNav, #optSideNav, #optSideNav > a").click(function(){
		$("#bodyContent").load("ajax/optAjax.html");
		$("ul > li").removeClass("active");
	});
	$("#productNav, #productSideNav, #productSideNav > a").click(function(){
		$("#bodyContent").load("ajax/productAjax.html");
		$("ul > li").removeClass("active");
	});
	
	// ---------- Aside Navigation AJAX Fuctions ----------
	$("#aside1").click(function(){
		$("#bodyContent").load("ajax/householdAjax.html");
		$("ul > li").removeClass("active");
	});
	$("#aside2").click(function(){
		$("#bodyContent").load("ajax/farmersAjax.html");
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
		$("#bodyContent").load("ajax/Public_Voluntary.html");
		$("ul > li").removeClass("active");
	});
			  
});