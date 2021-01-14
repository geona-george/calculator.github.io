function startover() {
	document.loan_form.loan_amt.value = "";
	document.loan_form.months.value = "";
	document.loan_form.date1.value = "";
	document.loan_form.date2.value = "";
	document.loan_form.rate.value = "";
	document.loan_form.extra.value = "0";
	document.loan_form.negative.value = "0";
	document.loan_form.radio.value = "";
	document.loan_form.radios.value = "";
	document.getElementById("loan_info").innerHTML = "";
	document.getElementById("table").innerHTML = "";
	location.reload();
}