var showAmt;
var showRate;
	
	$("input[id='submit']").attr("disabled", "disabled");


	$('#loan_amt').change( function() {  
		
	
		
	  if ($('#loan_amt').val() <= 0 || isNaN(Number($('#loan_amt').val()))  ){ // isNaN(number()) checks to see if the user entered a float
			
			$('#dialog').css('display', 'block');
			$('#amount').css('display', 'block');
			$('#amount').html('Pease do not enter any special characters or symbols as the input for your loan amount!!!');
			showAmt = true;
	  }
	  else{
		$('#amount').css('display', 'none');
		showAmt = false;
		if( (showAmt == false)  && (showRate == false)  ){
		$('#dialog').css('display','none');
		$("input[id='submit']").removeAttr("disabled"); 
		}
	  }
});

	
  $('#rate').change(function() {
	if ( $('#rate').val() <= 0 || $('#rate').val() > 99 ||  isNaN(Number($('#rate').val())) ){
		  
		  $('#dialog').css('display', 'block');
		  $('#interestRate').css('display', 'block');
		  $('#interestRate').html('Pease do not enter any special characters other than dot for your interest rate and also no value above 99 is accepted!!!');
		  showRate = true;
	}
	else{
	  $('#interestRate').css('display', 'none');
	  showRate = false;
	  if( (showAmt == false) && (showRate == false) ){
	  $('#dialog').css('display','none');
	  $("input[id='submit']").removeAttr("disabled"); 
  }
	}
});
