function validate() {
	var loan_amt = document.loan_form.loan_amt.value;
	var months = document.loan_form.months.value;
	var date1 = document.loan_form.date1.value;
	var date2 = document.loan_form.date2.value;
	var rate = document.loan_form.rate.value;
	var extra = document.loan_form.extra.value;
	var negative = document.loan_form.negative.value;
	if(loan_amt <= 0 || isNaN(Number(loan_amt))) {
		alert("Please enter a valid loan amount.");
		document.loan_form.loan_amt.value = "";
	} else if(months <= 0 || parseInt(months) != months) {
		alert("Please enter a valid number of months.");
		document.loan_form.months.value = "";
	} else if(!date1.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)) {   //regex for 
		alert("Please enter a valid date");
		document.loan_form.date1.value = "";
	} else if(!date2.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)) {
		alert("Please enter a valid date");
		document.loan_form.date2.value = "";
	} else if(rate <= 0 || rate > 99 || isNaN(Number(rate))) {
		alert("Please enter a valid interest rate.");
		document.loan_form.rate.value = "";
	} else if(extra < 0 || isNaN(Number(extra))) {
		alert("Please enter a valid extra payment.");
		document.loan_form.extra.value = "0";
	} else if(negative < 0 || isNaN(Number(negative))) {
		alert("Please enter a valid negative payment.");
		document.loan_form.negative.value = "0";
	} else if(!document.getElementById('radio').checked && !document.getElementById('radios').checked) {
		alert("Please mark yes or no");
	} else {                           //every data is validated
		calculate(parseFloat(loan_amt), parseInt(months), parseFloat(rate), parseFloat(extra), parseFloat(negative));
	}
}
