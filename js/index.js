window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector('.contenedor-loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})


// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
