$(document).ready(function(){

  $("#aboutNav").click(function(){
    $("#bodyContent").load("ajax/aboutUsContent.html");
  });
  
  $("#blogNav").click(function(){
    $("#bodyContent").load("ajax/blogContent.html");
  });

});