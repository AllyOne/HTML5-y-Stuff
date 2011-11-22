(function() {
  var Nota;

  Nota = (function() {

    function Nota(contenido) {
      var $nota;
      $nota = jQuery("<div class=nota><div class=nota_content><textarea>" + contenido + "</textarea></div></div>");
      $nota.bind('webkitAnimationIteration', function(e) {
        return $nota.addClass('paused').unbind(e.type, arguments.callee).find('textarea').focus();
      });
      $nota.bind('click', function(e) {
        if (e.target === this) {
          return $nota.removeClass('paused').bind('webkitAnimationEnd', function(e) {
            return $nota.unbind(e.type, arguments.callee).detach();
          });
        }
      });
      jQuery('body').append($nota);
    }

    return Nota;

  })();

  jQuery(function($) {
    return $('#clicme').click(function() {
      return new Nota('');
    });
  });

}).call(this);
