$(document).ready(function(){

	if ($('#classOne').hasClass('in')) {
		$('#test123').addClass('ph-caret-down')
	}

	else {
		$('#test123').addClass('ph-caret-up')
	}


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

	//Datepicker

	$(function() {
	    $( "#datepicker1" ).datepicker({
      		selectOtherMonths: true,
      		dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      		minDate: -20,
      		maxDate: "+1M +10D" 
	    });

	    $( "#datepicker2" ).datepicker({
      		selectOtherMonths: true,
      		dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      		minDate: -20,
      		maxDate: "+1M +10D" 
	    });

	    $( "#datepicker3" ).datepicker({
      		selectOtherMonths: true,
      		dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      		minDate: -20,
      		maxDate: "+1M +10D" 
	    });

	    $( "#datepicker4" ).datepicker({
      		selectOtherMonths: true,
      		dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      		minDate: -20,
      		maxDate: "+1M +10D",
      		showOptions: { direction: "left" }
	    });

	    $( "#datepicker5" ).datepicker({
      		selectOtherMonths: true,
      		dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      		minDate: -20,
      		maxDate: "+1M +10D" 
	    });
  	});

	//Selects

	//Grade-select

	$( '#grade-select' ).selecter({
		customClass: "grade-select"
	});

});




$('#tooltip-test').tooltip({
	html: 'true'
});

	

