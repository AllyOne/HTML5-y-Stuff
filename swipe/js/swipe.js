function monitorSwipe(selector, onSwipe) {
	var $target = $(selector),
		startX  = null,
		endX    = null,
		radio   = 100; // desde que tanto considerarlo un swipe

	// limpiar todo
	function cancelTouch () {
		startX = endX = null;

		$target
			.unbind('touchmove', onTouchMove)
			.unbind('touchend', onTouchEnd);

		return false;
	}

	function onTouchMove (e) {
		// si es mas de un dedo
		if(e.originalEvent.touches.length != 1) return cancelTouch();

		// guardar la coordenada
		endX = e.originalEvent.touches[0].pageX;
	}

	function onTouchEnd () {
				
		// si fue un tap 
		if(!endX) return cancelTouch();

		// si fue un click
		if(startX === endX || Math.abs(startX-endX) < radio) return cancelTouch();

		var direccion = 'left';
		// hacia adelante y hacia atras
		if(startX > endX) direccion = 'right';
		
		if(onSwipe) onSwipe(direccion);

		// cancelar la accion
		cancelTouch();
	}

	// aqui empieza todo
	$target.bind('touchstart', function (e) {
		if(e.originalEvent.touches.length === 1) {
			startX = e.originalEvent.touches[0].pageX;

			$target.bind('touchmove', onTouchMove);
			$target.bind('touchend', onTouchEnd);
		}
	});
}
