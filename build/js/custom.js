$(document).ready(function(){

	$("#activity-planner table thead .fa").hide();


	$("#activity-planner table thead th").on('click', function(){
		$(this).addClass("active");
	});

	$("#activity-planner table thead th").on('click', function(){
		$(".fa", this).toggleClass("fa-caret-up fa-caret-down");
	});

	if ($("#activity-planner table thead th").hasClass("active")) {
		$(".fa", this).show();
	}

	else {
		$(".fa", this).hide();
	}

	//Panels carets up and down

});


	if ($('#test-test').hasClass('collapsed')) {
		$('#test-test-test').addClass('ph-caret-up')
	}

	else {
		$(this).closest('.panel-select-by-student').addClass('ph-caret-down')
	}

$('#tooltip-test').tooltip({
	html: 'true'
});

	

