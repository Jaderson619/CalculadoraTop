function insereValorClicado(valor) {
	document.getElementById("EntradaDados").value += valor
}

function calcular() {
	var valor = document.getElementById("EntradaDados").value
	console.log(valor)
	if (valor == "")
	{
		console.log(valor)
	} else {
	document.getElementById("EntradaDados").value = eval(valor)
	}
}

function limpar() {
    document.getElementById("EntradaDados").value = ''
}

document.onkeypress = function verificaTeclaPressionada(){
	var teclaEmUnicode = window.event.keyCode
	var teclaConvertidaChar = String.fromCharCode(teclaEmUnicode)
	if(teclaEmUnicode >= 48 && teclaEmUnicode <= 57 
		|| teclaEmUnicode == 42 
		|| teclaEmUnicode == 43 
		|| teclaEmUnicode == 45 
		|| teclaEmUnicode == 47)
	{
		document.getElementById("EntradaDados").value += teclaConvertidaChar
	}
	else if(teclaEmUnicode == 13)
	{
		calcular()
	}
}

