$("#flashlight").bind('mousemove', function(e){
	var offset = $('#flashlight').offset();
	$('#flashlight-shine').css({
		/*remove the border width + 1/2 the width + the offset of the base div to center the div on mousemove*/
		left:  e.pageX - 3100 - offset.left,
		top:   e.pageY - 3100 - offset.top,
	});
});

