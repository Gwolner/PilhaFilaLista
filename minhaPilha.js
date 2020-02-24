
var pilha = new Pilha();

document.write("Testando... </br>");

document.write("Pilha:</br> Topo-["+pilha.getPilha()+"]-Base</br></br>");
document.write("Quantidade de itens na pilha: "+pilha.getQuantidadeDados()+"</br></br>");

document.write("Adicionado valor "+pilha.push(10)+"</br>");
document.write("Adicionado valor "+pilha.push(8)+"</br></br>");

document.write("Pilha:</br> Topo-["+pilha.getPilha()+"]-Base</br></br>");
document.write("Quantidade de itens na pilha: "+pilha.getQuantidadeDados()+"</br></br>");

document.write("Adicionado valor "+pilha.push(3)+"</br>");
document.write("Adicionado valor "+pilha.push(7)+"</br>");
document.write("Adicionado valor "+pilha.push(1)+"</br>");
document.write("Adicionado valor "+pilha.push(9)+"</br>");
document.write("Adicionado valor "+pilha.push(2)+"</br>");
document.write("Adicionado valor "+pilha.push(5)+"</br></br>");

document.write("Pilha:</br> Topo-["+pilha.getPilha()+"]-Base</br></br>");
document.write("Quantidade de itens na pilha: "+pilha.getQuantidadeDados()+"</br></br>");

document.write("O valor do topo é "+pilha.getTopo()+"</br></br>");

document.write("Removendo o valor "+pilha.pop()+" do topo da pilha. </br></br>");

document.write("Pilha:</br> Topo-["+pilha.getPilha()+"]-Base</br></br>");
document.write("Quantidade de itens na pilha: "+pilha.getQuantidadeDados()+"</br></br>");

document.write("Removendo o valor "+pilha.pop()+" do topo da pilha. </br>");
document.write("Removendo o valor "+pilha.pop()+" do topo da pilha. </br>");
document.write("Removendo o valor "+pilha.pop()+" do topo da pilha. </br></br>");

document.write("Pilha:</br> Topo-["+pilha.getPilha()+"]-Base</br></br>");
document.write("Quantidade de itens na pilha: "+pilha.getQuantidadeDados()+"</br></br>");

document.write("O valor do topo é "+pilha.getTopo()+"</br></br>");

function Pilha(){
	var topo = null;
	var quantidadeDados = 0;
	
	//Obter quantidade de dados na pilha.
	this.getQuantidadeDados = function(){
		return quantidadeDados;
	}
	
	//Adicionar dados ao topo da pilha (PUSH)
	this.push = function(dado){
		var no = {
			dado : dado,
			dadoAbaixo : null
		};
		
		no.dadoAbaixo = topo;
		topo = no;
		
		quantidadeDados++;
		
		return topo.dado;
	}	
	
	//Remover dados do topo da pilha (POP)
	this.pop = function(){
		if(topo === null){
			return null;
		}else{
			var excluido = topo;
			topo = topo.dadoAbaixo;
			
			quantidadeDados--;
			
			return excluido.dado;
		}
	}
	
	//Obter dado que está no topo da pilha
	this.getTopo = function(){
		if(topo === null){
			return null;
		}else{
			return topo.dado;
		}
	}
	
	//Obter todos os dados da pilha
	this.getPilha = function(){
		if(topo === null){
			return null;
		}else{
			var arrayPilha = [];
			var proximoDado = topo;
			
			
			for(var i = 0;i < quantidadeDados; i++){
				arrayPilha[i] = proximoDado.dado;
				proximoDado = proximoDado.dadoAbaixo;
			}
			
			return arrayPilha;
		}
	}	
		
}