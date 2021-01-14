// ----------------------------------------------------------------------------------------------- INTEREST-ONLY CALCULATION

function calculate(loan_amt, months, rate, extra, negative) {
	if(document.getElementById('radio').checked) {
		i = rate / 100;
		var month_payment = (i / 12) * loan_amt;
		var info = "";
		info += "<table width='250'>";
		info += "<tr><td>Loan Amount:</td>";
		info += "<td align='right'>$" + loan_amt + "</td></tr>";
		info += "<tr><td>Num of Months:</td>";
		info += "<td align='right'>" + months + "</td></tr>";
		info += "<tr><td>Interest Rate:</td>";
		info += "<td align='right'>" + rate + "%</td></tr>";
		info += "<tr><td>Monthly Payment:</td>";
		info += "<td align='right'>$" + round(month_payment, 2) + "</td></tr>";
		info += "<tr><td>+Extra:</td>";
		info += "<td align='right'>$" + extra + "</td></tr>";
		info += "<tr><td>-Negative:</td>";
		info += "<td align='right'>$" + negative + "</td></tr>";
		info += "<tr><td>Total Payment:</td>";
		info += "<td align='right'>$" + round((month_payment + extra - negative), 2) + "</td></tr>";
		info += "</table>";
		document.getElementById("loan_info").innerHTML = info;

	// -------------------------------------------------------------------------------------TABLE FOR INTEREST-ONLY CALCULATOR 
		
	var table = "";
		table += "<table cellpadding='15' ";
		var startdate = date2.value;
		var day = moment(startdate);
		var start_balance = loan_amt;
		towards_interest = (i / 12) * start_balance;
		var j;
		var month_payment = (i / 12) * start_balance;
		for(j = 1; j <= 3; j++) {
			table += "<tr class='table_info'>";
			table += "<td  width='70'>" + day.format('MM/DD/YYYY') + "</td>";
			table += "<td  width='60'>" + round(start_balance, 2) + "</td>";
			table += "<td  width='62'>" + 0 + "</td>";
			table += "<td width='60' >" + round(towards_interest, 2) + "</td>";
			table += "<td  width='83'>" + round(month_payment, 2) + "</td>";
			table += "<td  width='71' >" + round(start_balance, 2) + "</td>";
			table += "</tr>";
			var day = moment(day).add(1, 'months');
		}
		var monthly_payment = loan_amt * (i / 12) * Math.pow((1 + i / 12), (months - 3)) / (Math.pow((1 + i / 12), (months - 3)) - 1);
		var monthly_payment = monthly_payment + extra - negative;
		while(start_balance > 0) {        //create rows
			towards_interest = (i / 12) * start_balance;
			if(monthly_payment > start_balance) {
				monthly_payment = start_balance + towards_interest;
			}
			towards_balance = monthly_payment - towards_interest;
			end_balance = start_balance - towards_balance;
			table += "<tr class='table_info'>";            //display rows
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

// ------------------------------------------------------------------------------------- SIMPLE AMORTIZATION CALCULATION

	}else if(document.getElementById('radios').checked) {
		i = rate / 100;
		var monthly_payment = loan_amt * (i / 12) * Math.pow((1 + i / 12), (months)) / (Math.pow((1 + i / 12), (months)) - 1);
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

	// ----------------------------------------------------------------------------------- TABLE FOR SIMPLE AMORTIZATION CALCULATOR	
		
	var table = "";
		table += "<table cellpadding='15' ";
		var startdate = date2.value;
		var day = moment(startdate);
		var start_balance = loan_amt;
		towards_interest = (i / 12) * start_balance;
		var monthly_payment = monthly_payment + extra - negative;
		while(start_balance > 0) {          //create rows
			towards_interest = (i / 12) * start_balance;
			if(monthly_payment > start_balance) {
				monthly_payment = start_balance + towards_interest;
			}
			towards_balance = monthly_payment - towards_interest;
			end_balance = start_balance - towards_balance;
			table += "<tr class='table_info'>";                //display rows
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
	}
	document.getElementById("table").innerHTML = table;
	}
	
	function round(num, dec) {
	return(Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);
	}