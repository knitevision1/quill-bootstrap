$(document).ready(function(){
	$("#activity-planner table thead .fa").hide();

	$("#activity-planner table thead th").mouseover(function(){
		$(".fa", this).show();
	});

	$("#activity-planner table thead th").mouseleave(function(){
		$(".fa", this).hide();
	});

});

$('#tooltip-test').tooltip({
	html: 'true'
});

	

