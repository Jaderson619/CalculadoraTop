function inserirValorNaTela(valor) {
	document.getElementById("EntradaNumerosNaTelaCalculadora").value += valor
}

function calcular() {
	var valor = document.getElementById("EntradaNumerosNaTelaCalculadora").value

	if (valor == "")
	{
	} else {
	document.getElementById("EntradaNumerosNaTelaCalculadora").value = eval(valor)
	}
}

function limpar() {
    document.getElementById("EntradaNumerosNaTelaCalculadora").value = ''
}

document.onkeypress = function validarTeclaPressionada(){
	var teclaEmASCII = event.keyCode
	var teclaConvertidaChar = String.fromCharCode(teclaEmASCII)
	if(teclaEmASCII >= 48 && teclaEmASCII <= 57 
		|| teclaEmASCII == 42 && ultimoCaractereDoValor != "*"
		|| teclaEmASCII == 43 && ultimoCaractereDoValor != "+" 
		|| teclaEmASCII == 45 && ultimoCaractereDoValor != "-"
		|| teclaEmASCII == 47 && ultimoCaractereDoValor != "/")
	{
		inserirValorNaTela(teclaConvertidaChar)
		ultimoCaractereDoValor = teclaConvertidaChar
	}
	else if(teclaEmASCII == 13)
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
