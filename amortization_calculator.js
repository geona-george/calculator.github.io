var showAmount;
var showMonths;
var showRate;
var showExtra;
var showNegative;
$("input[id='submit']").attr("disabled", "disabled");
$('#loan_amt').change(function() {
	if($('#loan_amt').val() <= 0 || isNaN(Number($('#loan_amt').val()))) {
		$('#dialog').css('display', 'block');
		$('#amount').css('display', 'block');
		$('#amount').html('<img src="images.png" width="25" height="25"/> Please enter a valid loan amount.');
		showAmt = true;
	} else {
		$('#amont').css('display', 'none');
		showAmount = false;
		if((showAmount == false) && (showMonths == false) && (showRate == false)) {
			$('#dialog').css('display', 'none');
			$("input[id='submit']").removeAttr("disabled");
		}
	}
});
$('#months').change(function() {
	if($('#months').val() <= 0 || parseInt($('#months').val()) != $('#months').val()) {
		$('#dialog').css('display', 'block');
		$('#numMonths').css('display', 'block');
		$('#numMonths').html('<img src="images.png" width="25" height="25"/> Please enter a valid number of months.');
		showMonths = true;
	} else {
		$('#numMonths').css('display', 'none');
		showMonths = false;
		if((showAmount == false) && (showMonths == false) && (showRate == false)) {
			$('#dialog').css('display', 'none');
			$("input[id='submit']").removeAttr("disabled");
		}
	}
});
$('#rate').change(function() {
	if($('#rate').val() <= 0 || $('#rate').val() > 99 || isNaN(Number($('#rate').val()))) {
		$('#dialog').css('display', 'block');
		$('#interestRate').css('display', 'block');
		$('#interestRate').html('<img src="images.png" width="25" height="25"/> Please enter a valid interest rate.');
		showRate = true;
	} else {
		$('#interestRate').css('display', 'none');
		showRate = false;
		if((showAmount == false) && (showMonths == false) && (showRate == false)) {
			$('#dialog').css('display', 'none');
			$("input[id='submit']").removeAttr("disabled");
		}
	}
});
$('#extra').change(function() {
	if($('#extra').val() < 0 || isNaN(Number($('#extra').val()))) {
		$('#dialog').css('display', 'block');
		$('#extraPayment').css('display', 'block');
		$('#extraPayment').html('<img src="images.png"  width="25" height="25" /> Please enter a valid extra payment.');
		showExtra = true;
	} else {
		$('#extraPayment').css('display', 'none');
		showExtra = false;
		if((showAmount == false) && (showMonths == false) && (showRate == false)) {
			$('#dialog').css('display', 'none');
			$("input[id='submit']").removeAttr("disabled");
		}
	}
});
$('#negative').change(function() {
	if($('#negative').val() < 0 || isNaN(Number($('#negative').val()))) {
		$('#dialog').css('display', 'block');
		$('#negativePayment').css('display', 'block');
		$('#negativePayment').html('<img src="images.png"  width="25" height="25" /> Please enter a valid negative payment.');
		showNegative = true;
	} else {
		$('#negativePayment').css('display', 'none');
		showNegative = false;
		if((showAmount == false) && (showMonths == false) && (showRate == false)) {
			$('#dialog').css('display', 'none');
			$("input[id='submit']").removeAttr("disabled");
		}
	}
});

function startover() {
	document.loan_form.loan_amt.value = "";
	document.loan_form.months.value = "";
	document.loan_form.date1.value = "";
	document.loan_form.date2.value = "";
	document.loan_form.rate.value = "";
	document.loan_form.extra.value = "0";
	document.loan_form.negative.value = "0";
	document.getElementById("loan_info").innerHTML = "";
	document.getElementById("table").innerHTML = "";
	location.reload();
}

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
	} else if(!date1.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/)) {
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
	} else {
		calculate(parseFloat(loan_amt), parseInt(months), parseFloat(rate), parseFloat(extra), parseFloat(negative));
	}
}

function calculate(loan_amt, months, rate, extra, negative) {
	i = rate / 100;
	var monthly_payment = loan_amt * (i / 12) * Math.pow((1 + i / 12), months) / (Math.pow((1 + i / 12), months) - 1);
	var info = "";
	info += "<table width='250'>";
	info += "<tr><td>Loan Amount:</td>";
	info += "<td align='right'>$" + loan_amt + "</td></tr>";
	info += "<tr><td>Num of Months:</td>";
	info += "<td align='right'>" + months + "</td></tr>";
	info += "<tr><td>Interest Rate:</td>";
	info += "<td align='right'>" + rate + "%</td></tr>";
	info += "<tr><td>Monthly Payment:</td>";
	info += "<td align='right'>$" + round(monthly_payment, 2) + "</td></tr>";
	info += "<tr><td>+Extra:</td>";
	info += "<td align='right'>$" + extra + "</td></tr>";
	info += "<tr><td>-Negative:</td>";
	info += "<td align='right'>$" + negative + "</td></tr>";
	info += "<tr><td>Total Payment:</td>";
	info += "<td align='right'>$" + round((monthly_payment + extra - negative), 2) + "</td></tr>";
	info += "</table>";
	document.getElementById("loan_info").innerHTML = info;
	var table = "";
	table += "<table cellpadding='15' ";
	var startdate = date2.value;
	var day = moment(startdate);
	var start_balance = loan_amt;
	var monthly_payment = monthly_payment + extra - negative;
	while(start_balance > 0) {
		towards_interest = (i / 12) * start_balance;
		if(monthly_payment > start_balance) {
			monthly_payment = start_balance + towards_interest;
		}
		towards_balance = monthly_payment - towards_interest;
		end_balance = start_balance - towards_balance;
		table += "<tr class='table_info'>";
		table += "<td  width='70'>" + day.format('MM/DD/YYYY') + "</td>";
		table += "<td  width='60'>" + round(start_balance, 2) + "</td>";
		table += "<td  width='62'>" + round(towards_balance, 2) + "</td>";
		table += "<td width='60' >" + round(towards_interest, 2) + "</td>";
		table += "<td  width='83'>" + round(monthly_payment, 2) + "</td>";
		table += "<td  width='71' >" + round(end_balance, 2) + "</td>";
		table += "</tr>";
		var start_balance = end_balance;
		var day = moment(day).add(1, 'months');
	}
	document.getElementById("table").innerHTML = table;
}

function round(num, dec) {
	return(Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);
}
	
	

	
