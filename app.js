function addValor(valor) {
	document.getElementById("EntradaDados").value += valor
}

function Calcular() {
	var valor = document.getElementById("EntradaDados").value
	document.getElementById("EntradaDados").value = eval(valor)
}

function Limpar() {
    document.getElementById("EntradaDados").value = ''
}