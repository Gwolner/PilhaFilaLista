function No(){
	var item;
	var proximoNo;
}

function Lista(){
	
	var inicio = null;
	var fim = null;
	var tamanho = 0;
	
	this.adiciona = function(item) {		
		var novoNo = new No();
		if (inicio === null){
			novoNo.item = item;
			inicio = novoNo;
			fim = novoNo;
			novoNo.proximoNo = null;
			tamanho++;
		}
		else{
			novoNo.item = item;
			var nodeANT = pega(tamanho);
			nodeANT.proximoNo = novoNo;
			fim.proximoNo = novoNo;
			fim = novoNo;
			novoNo.proximoNo = null;
			tamanho++;
		}

	}
	
	this.pega = function(index){
		if ((index < 1)||(index > tamanho)){
			return "Índice inválido!";
		}
		else{
			var nodeTEMP = inicio;
			index--;
			while(index !== 0){
				nodeTEMP = nodeTEMP.proximoNo;
				index--;
			}
			return nodeTEMP;
		}
	}
	
	this.insere = function(index, item) {
		if ((index < 1)||(index > tamanho)){
			return "Índice inválido!";
		}
		var novoNo = new No();
		if (index === 1){
			novoNo.item = item;
			novoNo.proximoNo = inicio;
			inicio = novoNo;
		}
		else{
			novoNo.item = item;
			var nodeANT = pega(index-1);
			novoNo.proximoNo = nodeANT.proximoNo;
			nodeANT.proximoNo = novoNo;
		}
		tamanho++;

	}
	
	this.remove = function(index) {
		if ((index < 1)||(index > tamanho)){
			return "Índice inválido!";
		}
		if (inicio === null){
			return "Lista vazia";
		}
		var nodeTEMP;			
		if (index === 1){
			nodeTEMP = inicio;
			inicio = inicio.proximoNo;
			if (fim === nodeTEMP){
				fim = null;
			}
		}
		else{

			var nodeANT = pega(index-1);
			nodeTEMP = nodeANT.proximoNo;
			nodeANT.proximoNo =((nodeANT.proximoNo).proximoNo);
			if (fim === nodeTEMP){
				fim = nodeANT;
			}
		}
		var dados = nodeTEMP.item;
		tamanho--;

		return dados;
	}
	
	this.exibe = function() {

		if (inicio === null){
			return "Lista vazia!";
		}
		else{
			var nodeAUX = inicio;
			var arrayLista = [];
			var posicao = 0;
			while(nodeAUX !== null){
				arrayLista[posicao] = nodeAUX.item;
				nodeAUX = nodeAUX.proximoNo;
				posicao++;
			}
			
			return arrayLista;
		}
	}
	
	
	
	
	
	
	
}