+function() {
	// Elementos
	var ordenar = document.getElementById("ordenar");
    
    var obtenerNumeros = function () {
        var inputs = document.getElementsByClassName("numero");
        var numeros = [];
        for (var i = 0, l = inputs.length; i < l; i++) {
            numeros.push(inputs[i].value);
        }
        return numeros;
    }
    
	// Manejador de Evento
	ordenar.addEventListener("click", function () {
		var numeros = obtenerNumeros();
		var resultado = document.getElementById("resultado");
		resultado.textContent = ordenarNumeros(numeros);
	});
}();