var lista = new Lista(10);

document.write("Adicionado item: "+lista.add("a")+"</br>");
document.write("Adicionado item: "+lista.add("b")+"</br>");
document.write("Adicionado item: "+lista.add("c")+"</br>");
document.write("Adicionado item: "+lista.add("d")+"</br>");
document.write("Adicionado item: "+lista.add("e")+"</br>");
document.write("</br>");
lista.exibe();

document.write("</br>");
lista.remove(3);
lista.exibe();

document.write("</br>");
document.write("Pego item 4 que é o "+lista.pega(4)+"</br>"); 
lista.insere(2, 'f');
lista.exibe();

document.write("</br>");
document.write("Adicionado item: "+lista.add("g")+"</br>");
lista.exibe();
document.write("</br>");
lista.insere(4, 'h'); 
lista.exibe();
document.write("</br>");
document.write("Pego item 2 que é o "+lista.pega(2)+"</br>"); 
lista.exibe();

function Lista(cap){
	
	var itens = new Array(cap);
	var capacidade = cap;
	var tamanhoAtual = 0;
	var auxiliar = 0;
	
	this.getitens = function(){
		return itens;
	}
	
	this.getCapacidade = function(){
		return capacidade;
	}	
	
	this.getTamanhoAtual = function(){
		return tamanhoAtual;
	}
	
	this.add = function(item){
		if(tamanhoAtual === (capacidade-1)){
			return "Erro de overflow!";
		}else{
			itens[tamanhoAtual] = item;
			tamanhoAtual++;
			
			return item;
		}
	}
	
	this.pega = function(index){
		if(index > tamanhoAtual || index < 1){
			return "índice inválido!";
		}else{
			return itens[index-1];
		}
	}
	
	this.insere = function(index, item){ //Implementar return!!
		if(tamanhoAtual === capacidade){
			return "Lista cheia!";
		}else if(index > tamanhoAtual || index < 1){
			return "índice inválido!";
		}else{
			auxiliar = (tamanhoAtual - index);
			var tamanhoAtualCopia = tamanhoAtual;
			for(var i=0; i <= auxiliar;i++){
				itens[tamanhoAtualCopia] = itens[tamanhoAtualCopia-1];
				tamanhoAtualCopia--;
			}
			itens[index-1] = item; 
			tamanhoAtual++;
		}
	}
	
	this.remove = function(index){ //Implementar return!!
		if(tamanhoAtual === 0){
			return "Lista vazia!";
		}else if(index > tamanhoAtual || index < 1){
			return "índice inválido!";
		}else{
			auxiliar = (tamanhoAtual - index);
			for(var i=0; i < auxiliar;i++){
				itens[index-1] = itens[index];
				index++;
			}
			tamanhoAtual--;
		}
	}
	
	this.exibe = function(){ //Implementar return!!!!
		//var itensConcatenados = null;
		for(var i=0; i < tamanhoAtual; i++){
			document.write(itens[i]+" ");
		}
		// return 
	}
}
