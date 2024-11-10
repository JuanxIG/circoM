$(document).ready(function() {
    // Cuando se haga clic en cualquier botón de FAQ
    $('.faq-button').click(function() {
        // Alternar la visibilidad de la respuesta correspondiente
        $(this).next('.faq-answer').slideToggle();
        
        // Cerrar todas las demás respuestas
        $('.faq-answer').not($(this).next()).slideUp();
    });
});
