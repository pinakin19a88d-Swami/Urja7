/*  */
$(document).ready(function(){
	// ---------- Main Navigation AJAX Fuctions ----------
	$("#aboutNav, #aboutFtNav").click(function(){
		$("#bodyContent").load("ajax/aboutUsAjax.html");
		$("ul > li").removeClass("active");
		$("#aboutNav, #aboutFtNav").parent().addClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");

	});

	$("#resourceNav, #resourceFtNav").click(function(){
		currentPage = 1;
		pageId = "resourceBase";
		$("#bodyContent").load("ajax/resource1Ajax.html");
		$("ul > li").removeClass("active");
		$("#resourceNav, #resourceFtNav").parent().addClass("active");

		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","block");
	});

	$("#careersNav, #careersFtNav").click(function(){
		// $("#bodyContent").load("ajax/careersAjax_JQuery.html");
		$("ul > li").removeClass("active");
		$("#careersNav, #careersFtNav").parent().addClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});

	$("#contactNav, #contactFtNav").click(function(){
		$("#bodyContent").load("ajax/contactAjax.html");
		$("ul > li").removeClass("active");
		$("#contactNav, #contactFtNav").parent().addClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	
	$("#blogNav, #blogFtNav").click(function(){
		currentPage = 1;
		pageId = "blog";
		$("#bodyContent").load("ajax/blog1Ajax.html");
		$("ul > li").removeClass("active");
		$("#blogNav, #blogFtNav").parent().addClass("active");

		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","block");
	});


	// ---------- Consecutive Pages AJAX Fuctions ----------
	var currentPage = 1;
	var pageId = "";

	$(".prevArrow").click(function(){

		if(currentPage == 1)
		{
			if(pageId == "blog")
			{
				$("#bodyContent").load("ajax/"+"blog"+currentPage.toString()+"Ajax.html");
			}
			else if(pageId == "resourceBase")
			{
				$("#bodyContent").load("ajax/"+"resource"+currentPage.toString()+"Ajax.html");
			}
		}
		else if(currentPage == 2)
		{
			if(pageId == "blog")
			{
				currentPage -= 1;
				$("#bodyContent").load("ajax/"+"blog"+currentPage.toString()+"Ajax.html");
			}
			else if(pageId == "resourceBase")
			{
				currentPage -= 1;
				$("#bodyContent").load("ajax/"+"resource"+currentPage.toString()+"Ajax.html");
			}
		}
		else if(currentPage == 3)
		{
			if(pageId == "blog")
			{
				currentPage -= 1;
				$("#bodyContent").load("ajax/"+"blog"+currentPage.toString()+"Ajax.html");
			}
		}
		
		$("ul > li").removeClass("active");
		$("#blogNav, #blogFtNav").parent().addClass("active");

		if((currentPage == 2) && (pageId == "resourceBase"))
		{
			$(".prevArrow").css("display","block");
			$(".nextArrow").css("display","none");
		}
		else if((currentPage == 2) && (pageId == "blog"))
		{
			$(".prevArrow").css("display","block");
			$(".nextArrow").css("display","block");
		}
		else if((currentPage == 3) && (pageId == "blog"))
		{
			$(".prevArrow").css("display","block");
			$(".nextArrow").css("display","none");
		}
		else if(currentPage == 1)
		{
			$(".prevArrow").css("display","none");
			$(".nextArrow").css("display","block");
		}

	});

	$(".nextArrow").click(function(){

		if(currentPage == 1)
		{
			if(pageId == "blog")
			{
				currentPage += 1;
				$("#bodyContent").load("ajax/"+"blog"+currentPage.toString()+"Ajax.html");
			}
			else if(pageId == "resourceBase")
			{
				currentPage += 1;
				$("#bodyContent").load("ajax/"+"resource"+currentPage.toString()+"Ajax.html");
			}
		}
		else if(currentPage == 2)
		{
			if(pageId == "blog")
			{
				currentPage += 1;
				$("#bodyContent").load("ajax/"+"blog"+currentPage.toString()+"Ajax.html");
			}
			else if(pageId == "resourceBase")
			{
				$("#bodyContent").load("ajax/"+"resource"+currentPage.toString()+"Ajax.html");
			}
		}
		else if(currentPage == 3)
		{
			if(pageId == "blog")
			{
				$("#bodyContent").load("ajax/"+"blog"+currentPage.toString()+"Ajax.html");
			}
		}
		$("ul > li").removeClass("active");
		$("#blogNav, #blogFtNav").parent().addClass("active");

		if((currentPage == 2) && (pageId == "resourceBase"))
		{
			$(".prevArrow").css("display","block");
			$(".nextArrow").css("display","none");
		}
		else if((currentPage == 2) && (pageId == "blog"))
		{
			$(".prevArrow").css("display","block");
			$(".nextArrow").css("display","block");
		}
		else if((currentPage == 3) && (pageId == "blog"))
		{
			$(".prevArrow").css("display","block");
			$(".nextArrow").css("display","none");
		}
		else if(currentPage == 1)
		{
			$(".prevArrow").css("display","none");
			$(".nextArrow").css("display","block");
		}

	});

	// ---------- Side Navigation AJAX Fuctions ----------
	$("#energyNav, #energySideNav, #energySideNav > a").click(function(){
		$("#bodyContent").load("ajax/energyAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	$("#pumpingNav, #pumpingSideNav, #pumpingSideNav > a").click(function(){
		$("#bodyContent").load("ajax/pumpingAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	$("#optNav, #optSideNav, #optSideNav > a").click(function(){
		$("#bodyContent").load("ajax/optAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	$("#productNav, #productSideNav, #productSideNav > a").click(function(){
		$("#bodyContent").load("ajax/productAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	
	// ---------- Aside Navigation AJAX Fuctions ----------
	$("#aside1").click(function(){
		$("#bodyContent").load("ajax/householdAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	$("#aside2").click(function(){
		$("#bodyContent").load("ajax/farmersAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	$("#aside3").click(function(){
		$("#bodyContent").load("ajax/communityAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	$("#aside4").click(function(){
		$("#bodyContent").load("ajax/businessAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	$("#aside5").click(function(){
		$("#bodyContent").load("ajax/publicVoluntaryAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
	$("#aside6").click(function(){
		$("#bodyContent").load("ajax/urjaFutureAjax.html");
		$("ul > li").removeClass("active");
		$(".prevArrow").css("display","none");
		$(".nextArrow").css("display","none");
	});
			  
});