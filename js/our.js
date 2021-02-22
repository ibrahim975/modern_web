// tab js
$(document).ready(function(){

	$('#tab-one').click(function(){
		$('#Home').addClass('active');
		$('#about').removeClass('active');
		$('#menu').removeClass('active');
	});
