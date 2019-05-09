// JavaScript Document

$(document).ready(function() {
	$(function() {
	var box = $("#pic");
	box.fadeOut("slow");
	box.fadeIn("slow");
	box.hide("slow");
	box.show("slow");
});
		$.ajax({
				url:"text.txt", 
				success: function(result) {
					$("#text_div").html(result);
		}});
});