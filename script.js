$(document).ready(function(){
    $('#calculate').click(function(){
        // Obtiene los valores de los inputs
        var num1 = parseFloat($('#input1').val());
        var num2 = parseFloat($('#input2').val());
        var operation = $('#operation').val();
        var result;

        // Función para mostrar el mensaje de error
        function showError(message) {
            $('#error-modal').removeClass('hidden'); // Muestra el modal
            $('#error-message').text(message); // Coloca el mensaje de error 
        }

        // Verifica que los inputs no estén vacíos y sean números
        if (isNaN(num1) || isNaN(num2)) {
            showError('¡Por favor, ingrese números válidos!');
            return;
        }

        // Realiza la operación según lo seleccionado
        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'subtract') {
            result = num1 - num2;
        } else if (operation === 'multiply') {
            result = num1 * num2;
        } else if (operation === 'divide') {
            if (num2 === 0) {
                showError('¡No se puede dividir por cero!');
                return;
            }
            result = num1 / num2;
        }

        // Muestra el resultado en el input
        $('#result').val(result);
    });

    // Oculta el modal de error y quita el difuminado del fondo
    $('#close-error').click(function(){
        $('#error-modal').addClass('hidden'); // Oculta el modal
        $('body').removeClass('blur-background'); // Quita el efecto de difuminado
    });
});
