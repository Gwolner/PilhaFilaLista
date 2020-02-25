function Fila(cap){

	var itens = new Array(cap);
	var capacidade = cap;
	var posicaoInicial = 0;
	var tamanho = 0;

	this.enfileira(item){ // adiciona um item ao final da fila; lança “Fila cheia” caso cheia
		if(tamanho < capacidade){
			itens[(posicaoInicial+tamanho)%capacidade] = item;
			tamanho++;
		}else{
			return "Fila cheia!";
		}
	}
	
	this.desinfileira(){ // remove um item do inicio da fila; lança “Fila vazia” caso vazia
		if(tamanho > 0){
			var auxiliar = itens[posicaoInicial];
			posicaoInicial = ((posicaoInicial+1)%capacidade);
			tamanho--;
			return auxiliar;
		}else{
			return "Fila vazia!";
		}
	}
	
	this.getCheia() { // retorna 1 se cheia, 0 caso contrário
		if(tamanho === capacidade){
			return "Fila cheia!"
		}else{
			return "Fila disponível.";
		}
	}
	
	this.getVazia() { // retorna 1 se vazia, 0 caso contrário
		if(tamanho === 0){
			return "Fila vazia!";
		}else{
			return "Fila contém itens.";
		}
	}

	this.getQuantidadeItens() { //retorna a quantidade de itens atualmente na fila
		return tamanho;
	}
	
}