$(function radio() {
	$('input[name="rad"]').click(function radio() {
		var $radio = $(this);
		if($radio.data('waschecked') == true) {    // if this was previously checked
			$radio.prop('checked', false);
			$radio.data('waschecked', false);
		} else $radio.data('waschecked', true);
		
		$radio.siblings('input[name="rad"]').data('waschecked', false);  // remove was checked from other radios
	});
});