function No(){
	var item;
	var proximoNo;
}

function Pilha(cap){
	
	var capacidade = cap;
	var topo = null;
	var quantidade = 0;


		this.empilha = function(item) {
			if(quantidade < capacidade){
				var novoNo = new No();		
				novoNo.proximoNo = topo;
				topo = novoNo;
				quantidade++;
			}else{
				return "Erro de overflow!";
			}
		}
		
		
		this.desempilha = function() {
			if(topo == null){
				return "Pilha vazia!";
			} else{
				var noTemporario = topo;
				topo=topo.proximoNo;
				var dados = noTemporario.item;
				
				return dados;
			}
		}
		
		//Obter quantidade de itens na pilha.
		this.quantidadeItens = function(){
			return quantidade;
		}
		
		//Obter item que está no topo da pilha
		this.itemTopo = function(){
			if(topo === null){
				return null;
			}else{
				return topo.item;
			}
		}
		
		//Obter todos os itens da pilha
		this.itensPilha = function(){
			if(topo === null){
				return null;
			}else{
				var arrayPilha = [];
				var noAuxiliar = topo;
				
				
				for(var i = 0;i < quantidade; i++){
					arrayPilha[i] = noAuxiliar.item;
					noAuxiliar = noAuxiliar.proximoNo;
				}
				
				return arrayPilha;
			}
		}	
}