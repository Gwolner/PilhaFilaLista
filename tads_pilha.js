function Pilha(cap){
	
	var itens = new Array(cap);
	var capacidade = cap;
	var topo = -1;
	
	this.empilhar = function(item){
		if(topo < capacidade){
			topo++;
			itens[topo] = item;
			return itens[topo];
		}else{
			return "Erro de overflow!";
		}
	}
	
	this.desempilha = function(){
		if(topo === -1){
			return "Pilha vazia!";
		}else{
			var auxiliar = itens[topo];
			topo--;
			return auxiliar;
		}
	}	
	
	//Obter quantidade de itens na pilha.
	this.quantidadeItens = function(){
		return (topo+1);
	}
	
	//Obter item que está no topo da pilha
	this.itemTopo = function(){
		if(topo === -1){
			return null;
		}else{
			return topo.item;
		}
	}
	
	//Obter todos os itens da pilha
	this.itensPilha = function(){
		if(topo === -1){
			return null;
		}else{
			return itens;
		}
	}	
}