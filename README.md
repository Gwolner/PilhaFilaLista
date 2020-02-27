# Tipo abstrato de dado (TAD)

Os tipos e estruturas de dados existem para serem usados pelo programa para acessar informações neles armazenadas, por meio de operações apropriadas. Do ponto de vista do programador, muitas vezes é conveniente pensar nas estruturas de dados em termos das operações que elas suportam, e não da maneira como elas são implementadas. Uma estrutura de dados definida dessa forma é chamada de um Tipo Abstrato de Dados.

TAD, portanto, estabelece o conceito de tipo de dado separado da sua representação. Definido como um modelo matemático por meio de um par <b>(v,o)</b> em que <b>v</b> é um conjunto de valores e <b>o</b> é um conjunto de operações sobre esses 

Requer que operações sejam definidas sobre os dados sem estarem atreladas a uma representação específica. Programador que usa um tipo de dado (real, integer, array) não precisa saber como tais valores são representados internamente. 

O mesmo princípio pode ser aplicado a pilhas, listas, pilhas: Se existe uma implementação disponível de uma lista, um programador pode utilizá-la como se fosse uma  ́caixa preta, acessando-a por meio das operações que ela suporta.

O TAD também pode ser entendido como uma metodologia de programação que visa reduzir a informação necessária para construir um algoritmo através da abstração das variáveis envolvidas, tornando-as uma única entidade com operações próprias. 

Em projetos anteriores a metodologia TAD, um carro seria representado por variáveis soltas (modelo, fabricante, velocidade, cor, placa, etc) e estas seriam tratadas isoladamente, sem ligações lógicas entre sí. Usando a metodologia TAD pensamos em todas estas variáveis como uma "única variável/tipo" chamada carro, onde há funções/métodos próprios que lhe conferem a manipulação das variáveis que o compõe.

```
estrutura Carro{
 Cor
 Modelo
 Fabricante
}
   
funcao Carro_DefinorCor(Carro carro) retorna booleano;
funcao Carro_ConsultarModelo(Carro carro) retorna String;
```

A abstração de informações através do TAD foi um passo importante para o que hoje é a Orientação a Objetos, permitindo o controle do acesso às informações de um tipo, a herança e o polimorfismo. Na prática, o TAD é implementado usando-se um tipo composto (estrutura/registro/classe) com os valores pertencentes ao TAD e por funções/métodos que operam esta estrutura. 

# Pilha (Stack)

Uma pilha é uma estrutura de dados que serve como uma coleção de elementos, permitindo o acesso somente ao último item que foi inserido na estrutura (item do topo). Esse item pode ser lido ou removido. Caso seja removido, teremos acesso ao item imediatamente anterior (abaixo) a ele. Este item passa agora a ser o último item da pilha (topo). Este comportamento se repete até que a estrutura esteja vazia.

## Pilha x Array

Um array (vetor) é outra estrutura que permite o armazenamento de itens (dados), onde podemos acessar qualquer elemento em qualquer posição diretamente, sem a necessidade de acessar itens anteriores primeiro. Obviamente, para que isto ocorra, é preciso conhecer a posição do elemento que se deseja acessar.

## Como funciona um Pilha (LIFO)

Imagine uma pilha de pratos na cozinha. Se quisermos utilizar um prato, pegamos um do topo desta pilha (último prato). Se necessitarmos de outro, pegamos o próximo da pilha (que agora é o último), e assim por diante.

Quando um prato é lavado, após seu uso, pode ser recolocado novamente na pilha de pratos, sempre no topo. Esse prato recém-colocado na pilha passa a ser o último, e o primeiro que será retirado quando precisarmos usar um prato novamente.

Essa é a ideia geral de uma estrutura de dados do tipo pilha. Nela, os dados são inseridos na pilha (empilhados), e acessados em ordem inversa (o último a ser inserido é sempre o primeiro a ser utilizado). Colocar um elemento no topo de uma pilha é uma operação que recebe um nome especial: push. Já a remoção de um elemento do topo da pilha é uma operação denominada pop.

<img src="img/pilha.png" width="773" height="540"> 

Por conta deste modo de operação, as pilhas são classificadas como estruturas de dados de armazenamento Last-In, First-Out – LIFO, “o último a entrar é o primeiro a sair”, pois o último item inserido na pilha é sempre o primeiro a ser removido (ou lido).

## Aplicações das pilhas

As pilhas encontram inúmeras aplicações em programação e desenvolvimento de algoritmos, como por exemplo:

* Avaliação de Expressões e Parsing Sintático
* Algoritmos de Backtracking
* Gerenciamento de Memória em Tempo de Compilação
* Implementação de diversos algoritmos, como Grahan scan e SMAWK
* Operações como desfazer e refazer em aplicações
* Controle de navegação em browsers
* Endereçamento de instruções em microprocessadores
* Análise de expressões aritméticas

## Fila (Queue)

Assim como a pilha, também é  uma estrutura de dados responsável por uma coleção de elementos em que só podemos inserir um novo elemento no final da coleção e só podemos retirar o elemento no início desta. Ou seja, a ordem que um item é removido (ou lido) da fila é a mesma ordem em que ele entrou nela.

## Fila x Array

Um array é um conjunto de elementos que pode ser manipulado de várias formas, como tirar um elemento do inicio e por no fim ou tirar um elemento do meio e por no início, e assim por diante. Esta é a principal diferença.

## Como funciona uma Fila (FIFO)

Imaginemos agora uma fila de banco. Uma pessoa chega e, se não houver ninguem na sua frente, ela é logo atendida. Supondo que chegue mais uma pessoa, ela verá que a sua frente uma pessoa está sendo atendida e então espera sua vez. Caso cheguem mais pessoas, uma fila se forma e cada uma será atendida na ordem em que se inseriram na fila.

A que está na frente será atendido antes do que está atrás, este será atendido antes do que está imediatamente atrás de si e assim por diante.

Para implementar uma fila não é diferente: devemos ser capazes de inserir novos na extremidade do fim e retirar/ler elementos da outra extremidade, o início. Sempre inserimos novos elementos no fim da fila e estamos realizando a ação de enfileirar, já quando removemos um elemento do início da fila, estamos realizando a ação de desenfileirar.

<img src="img/fila.png" width="773" height="540"> 

As filas são classificadas como estruturas de dados de armazenamento FIFO, que é a sigla em inglês para “First in, first out”, que no idioma português quer dizer "o primeiro a entrar é o primeiro a sair"

## Aplicações das filas

* Fila de arquivos para impressão
* Atendimento de processos requisitados ao um S.O.
* Buffer para gravação de dados em mídia
* Processos de comunicação em redes de computadores

## Lista

É uma estrutura de dados tipo coleção, em que cada cada elemento que se deseja inserir, remover ou ler pode estar antes ou depois de um elemento ja presente na lista. Caso a lista esteja vazia, através de uma posição/índice, pode-se adicionar um elemento à lista.

## Lista x Array

Aqui temos um ponto sensível. <b>Geralmente</b> um array pode ser usado como lista e o contrário pode ser verdade. Entretanto, podem haver particularidades decorrente da linguagem que se usa a lista, no Java por exemplo, um ArrayList difere de um array normal, primeiro que o Arraylsite aceita tipos de elementos diferentes e não precisa ter a quantidade máxima de elementos definida previamente, já o array precisa ter uma quantidade limite declarada em sua criação e comporta apenas elementos de mesmo tipo (int, char, String, etc).

## Como funciona uma lista

Assim como escrevemos nas linhas de um papel para nos guiarmos de quais itens comprar, a estrutura de dados lista permite o mesmo feito. Um item adicionado ou removido pode estar em qualquer posição da lista, sendo essa posição definida pelo seu index, que é o valor numérico para informar esta posição dentro da estrutura lista. 

Na adição de um item é fundamental que seu index não esteja sendo ocupado por outro item qualquer, pois poderá haver, ou não, substituição de um item por outro (depende da implementação da adição). Caso não haja a troca dos itens, pode-se haver uma mensagem de erro informando a não adição devido a presença de um item no index informado(novamente, a dpeender da implementação feita pelo programador) 

## Aplicações das listas

* Organizar player de música
* Aplicativos de compras
* Adicionar arquivos em diretórios
