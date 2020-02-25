function No(){
	var item;
	var proximoNoimoNo;
}

function Fila(cap){

	var inicio = null;
	var fim = null;
	var capacidade = cap;
	var tamanho = 0;
	
	this.enfileira = function(item) {
		var  novoNo = new No ();
		novoNo.item = item;		
		novoNo.proximoNo=null;
		if (inicio === null){
			inicio = novoNo;
		}else{
			fim.proximoNo = novoNo;
		}
		fim = novoNo;
		tamanho++;
	}

	this.desenfileira = function() {
		if(inicio === null){
			return "Fila vazia";
		}else{		
			var  nodeTEMP = inicio;
			 inicio = inicio.proximoNo;
			if(inicio === null){
				fim === null;
			}
			var dados = nodeTEMP.item;			
			tamanho--;
			
			return dados;				
		}
	}

	this.cheia = function() {
		if(tamanho === capacidade){
			return "Fila cheia!"
		}else{
			return "Fila disponível.";
		}
	}

	this.vazia = function() {
		if(tamanho === 0){
			return "Fila vazia!";
		}else{
			return "Fila contém itens.";
		}
	}

	this.getTamanho= function() {
		return tamanho;
	}
}
