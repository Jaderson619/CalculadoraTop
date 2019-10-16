function inserirValorNaTela(valor) {
	document.getElementById("EntradaDados").value += valor
}

function calcular() {
	var valor = document.getElementById("EntradaDados").value

	if (valor == "")
	{
	} else {
	document.getElementById("EntradaDados").value = eval(valor)
	}
}

function limpar() {
    document.getElementById("EntradaDados").value = ''
}

document.onkeypress = function validarTeclaPressionada(){
	var teclaEmDecimal = event.keyCode
	var teclaConvertidaChar = String.fromCharCode(teclaEmDecimal)
	if(teclaEmDecimal >= 48 && teclaEmDecimal <= 57 
		|| teclaEmDecimal == 42 && ultimoCaractereDoValor != "*"
		|| teclaEmDecimal == 43 && ultimoCaractereDoValor != "+" 
		|| teclaEmDecimal == 45 && ultimoCaractereDoValor != "-"
		|| teclaEmDecimal == 47 && ultimoCaractereDoValor != "/")
	{
		inserirValorNaTela(teclaConvertidaChar)
		ultimoCaractereDoValor = teclaConvertidaChar
		console.log(ultimoCaractereDoValor)
	}
	else if(teclaEmDecimal == 13)
	{
		calcular()
	}
}

document.onkeydown = function apagarAoPressionarBackspace(){
	var checaSeTeclaPressionadaEBackspace = event.keyCode

	if(checaSeTeclaPressionadaEBackspace == 8)
	{
		limpar()
	}
}
