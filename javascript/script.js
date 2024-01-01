// JavaScript Document

jQuery(document).ready(function(){

	$(".tit>li").mouseover(function(){
		$(".subtit").stop().slideDown(500);
		$(".menubg").stop().slideDown(200);
	}).mouseout(function(){
		$(".subtit").stop().slideUp(500);
		$(".menubg").stop().slideUp(500);
	});

});


$(".imgslide a:gt(0)").hide();
setInterval(function(){
	$(".imgslide a:first-child")
	.fadeOut(1000)
	.next("a")
	.fadeIn(1000)
	.end()
	.appendTo(".imgslide");
},5000);

$(function(){
	$(".tabmenu>li>a").click(function(){
		$(this).parents().addClass("active").siblings().removeClass("active");
		return false;
	});
});


$(".notice li:first").click(function(){
	$(".layer").addClass("active");
});
$(".btn").click(function(){
	$(".layer").removeClass("active");
});