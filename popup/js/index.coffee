class Nota
	constructor: (contenido) ->
		# crear la nota html
		$nota = jQuery "<div class=nota><div class=nota_content><textarea>#{contenido}</textarea></div></div>"

		# la muestra en la primera iteración
		$nota.bind 'webkitAnimationIteration', (e) -> 
			$nota.addClass('paused').unbind(e.type, arguments.callee).find('textarea').focus()

		# al hacer clic en el overlay cerrar
		$nota.bind 'click', (e) ->
			if e.target is this 
				$nota.removeClass('paused')
				.bind 'webkitAnimationEnd', (e) -> $nota.unbind(e.type, arguments.callee).detach()
				

		jQuery('body').append $nota


# al hacer clic en el boton mostrar la nota
jQuery ($) -> $('#clicme').click -> new Nota('')