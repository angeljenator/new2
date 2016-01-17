/ * ================================================ =========
 * Bootstrap-modal.js v2.0.1
 * Http://twitter.github.com/bootstrap/javascript.html#modals
 * ================================================= ========
 * Derechos de Autor 2012 Twitter, Inc.
 *
 * Con licencia bajo la Licencia Apache, Versión 2.0 (la "Licencia");
 * No se puede utilizar este archivo excepto en cumplimiento de la Licencia.
 * Usted puede obtener una copia de la Licencia en
 *
 * Http://www.apache.org/licenses/LICENSE-2.0
 *
 * A menos que lo requiera la ley aplicable o se acuerde por escrito, el software
 * Distribuido bajo la licencia se distribuye "TAL CUAL",
 * SIN GARANTÍAS NI CONDICIONES DE NINGÚN TIPO, ya sea expresa o implícita.
 * Consulte la licencia para el idioma específico que rige los permisos y
 * Limitaciones en la licencia.
 * ================================================= ======== * /


! Función ($) {

  "Use strict"

 / * CLASE MODAL DEFINICIÓN
  * ====================== * /

  var Modal = function (contenido, opciones) {
    this.options = Opciones
    este. $ element = $ (contenido)
      .delegate ('[datos despedir = "modal"]', 'click.dismiss.modal', $ .proxy (this.hide, este))
  }

  Modal.prototype = {

      constructor: Modal

    , Alternar: function () {
        devolver este [! this.isShown? 'Show': 'ocultar'] ()
      }

    , Espectáculo: function () {
        var que este =

        si (this.isShown) retorno

        $ ("Cuerpo"). AddClass ('modal-abierto')

        this.isShown = true
        este. $ element.trigger ('show')

        escape.call (esto)
        backdrop.call (esto, function () {
          var transición = $ .support.transition && eso. $ element.hasClass ('fade')

          ! Que. $ Element.parent (). Longitud && eso. $ Element.appendTo (document.body) // no se mueven modales posición dom

          que. $ element
            .show ()

          si (transición) {
            que. $ elemento [0] .offsetWidth // fuerza reflujo
          }

          que. $ element.addClass ('en')

          la transición?
            . que $ element.one (. support.transition.end $, function () {$ que element.trigger ('muestra').}):
            que. $ element.trigger ('muestra')

        })
      }

    , Ocultar: function (e) {
        e && e.preventDefault ()

        if (! this.isShown) retorno

        var que este =
        this.isShown = false

        $ ("Cuerpo"). RemoveClass ('modal-abierto')

        escape.call (esto)

        esto. $ element
          .trigger ('ocultar')
          .removeClass ('en')

        $ && .support.transition Este. $ Element.hasClass ('fade')?
          hideWithTransition.call (este):
          hideModal.call (esto)
      }

  }


 / * MODALES métodos privados
  * ===================== * /

  hideWithTransition function () {
    var que este =
      , Timeout = setTimeout (function () {
          que. $ element.off ($. support.transition.end)
          hideModal.call (que)
        }, 500)

    este. $ element.one (support.transition.end $., function () {
      clearTimeout (tiempo de espera)
      hideModal.call (que)
    })
  }

  hideModal función (que) {
    esto. $ element
      .Hide ()
      .trigger ("oculto")

    backdrop.call (esto)
  }

  telón de fondo la función (devolución de llamada) {
    var que este =
      , Animar = este. $ Element.hasClass ('fade')? 'Fade': ''

    si (this.isShown && this.options.backdrop) {
      var doAnimate = $ .support.transition && animado

      este. $ telón de fondo = $ ('<div class = "modal-telón de fondo' + animar + '" />')
        .appendTo (document.body)

      si (this.options.backdrop! = 'estática') {
        este. $ backdrop.click ($. proxy (this.hide, este))
      }

      si (doAnimate) este. $ telón de fondo [0] .offsetWidth // fuerza reflujo

      este. $ backdrop.addClass ('en')

      doAnimate?
        . estos $ backdrop.one (. $ support.transition.end, devolución de llamada):
        llamar de vuelta ()

    } Else if (! This.isShown && este. $ Telón de fondo) {
      este. $ backdrop.removeClass ('en')

      $ && .support.transition Este. $ Element.hasClass ('fade')?
        . estos $ backdrop.one ($ support.transition.end, $ .proxy (removeBackdrop, este).):
        removeBackdrop.call (esto)

    } Else if (devolución de llamada) {
      llamar de vuelta ()
    }
  }

  removeBackdrop function () {
    esto. backdrop.remove $ ()
    este. $ telón de fondo = null
  }

  de escape function () {
    var que este =
    si (this.isShown && this.options.keyboard) {
      $ (Document) .on ('keyup.dismiss.modal', function (e) {
        e.which == 27 && that.hide ()
      })
    } Else if (! This.isShown) {
      $ (Document) .OFF ('keyup.dismiss.modal')
    }
  }


 / * MODAL PLUGIN DEFINICIÓN
  * ======================= * /

  $ .fn.modal = Function (opción) {
    volver this.each (function () {
      var $ this = $ (this)
        , Datos = $ this.data ('modal')
        , Opciones = $ .extend ({}, $ .fn.modal.defaults, $ this.data (), typeof opción == 'objeto' && opción)
      if (! datos) $ this.data ('modal', (datos = new Modal (este, opciones)))
      datos si (typeof opción == 'cadena') [opción] ()
      else if (options.show) data.show ()
    })
  }

  $ .fn.modal.defaults = {
      telón de fondo: true
    , Teclado: true
    , Espectáculo: true
  }

  $ .fn.modal.Constructor = Modal


 / * MODAL DE DATOS API
  * ============== * /

  $ (Function () {
    $ ("Cuerpo"). En ('click.modal.data-api', '[-toggle de datos = "modal"]', function (e) {
      var $ this = $ (this), href
        , $ Target = $ ($ this.attr ('destino de los datos ") || (href = $ this.attr (' href ')) && href.replace (/.* (? = # [^ \ S] + $) /, '')) // tira para IE7
        , Opción = $ target.data ('modal')? 'Alternar': $ .extend ({}, $ target.data (), $ this.data ())

      e.preventDefault ()
      $ Target.modal (opcional)
    })
  })

} (Window.jQuery);
