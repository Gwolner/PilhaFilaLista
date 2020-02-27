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
Já uma pilha é diferente pois o acesso aos seus itens é restrito, já que somente um item pode ser lido ou removido por vez, na ordem inversa em que foram colocado na pilha (item do topo), ao contrário de um array.

## Como funciona um Pilha (LIFO)

Imagine uma pilha de pratos na cozinha. Se quisermos utilizar um prato, pegamos um do topo desta pilha (último prato). Se necessitarmos de outro, pegamos o próximo da pilha (que agora é o último), e assim por diante.

Quando um prato é lavado, após seu uso, pode ser recolocado novamente na pilha de pratos, sempre no topo. Esse prato recém-colocado na pilha passa a ser o último, e o primeiro que será retirado quando precisarmos usar um prato novamente.

Essa é a ideia geral de uma estrutura de dados do tipo pilha. Nela, os dados são inseridos na pilha (empilhados), e acessados em ordem inversa (o último a ser inserido é sempre o primeiro a ser utilizado). Colocar um elemento no topo de uma pilha é uma operação que recebe um nome especial: push. Já a remoção de um elemento do topo da pilha é uma operação denominada pop.

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

O que diferencia a fila da pilha é a ordem de saída dos elementos: enquanto na pilha “o último que entra é o primeiro que sai”, na fila “o primeiro que entra é o primeiro que sai” (a sigla FIFO – first in, first out – é usada para descrever essa estratégia).

A ideia fundamental da fila é que só podemos inserir um novo elemento no final da fila e só podemos retirar o elemento do início.

Para implementar uma fila, devemos ser capazes de inserir novos elementos em uma extremidade, o fim, e retirar elementos da outra extremidade, o início. Ou seja, sempre inserimos novos elementos no fim da fila e quando removemos u um elemento ele é retirado do início da fila.

## Fila x Array

Basicamente fila  só permite um sentido de entrada de elementos "FIFO"   First In, First Out

Já o vetor(arrays) é um conjunto de elementos.. que pode ser manipulado.. como tirar um elemento do inicio e por no fim.. ou tirar um elemento do meio e por no início...  e assim por diante.  esta é a principal diferença.

## Como funciona uma Fila (FIFO)

Exemplificar com fila de banco!!

FIFO é a sigla em inglês para “First in, first out”, que no idioma português quer dizer que o primeiro [produto] a entrar no armazém deve ser também o primeiro a sair, com o objetivo de evitar a perda por vencimento da mercadoria.

## Aplicações das filas

* Fila de arquivos para impressão;
* Atendimento de processos requisitados ao um S.O.;
* Buffer para gravação de dados em mídia;
* Processos de comunicação em redes de computadores.











## Lista

Em uma estrutura de dados tipo lista, para cada novo elemento inserido na lista,  alocamos um espaço de memória para armazená-lo. Dessa forma, o espaço total de memória gasto pela estrutura é proporcional ao número de elementos armazenados na lista.

No entanto, não podemos garantir que os elementos armazenados na lista ocuparão um espaço de memória contíguo, pois a alocação é feita dinamicamente; portanto, não temos acesso direto aos elementos da lista, somente através do endereço de cada elemento.

Para percorrer todos os elementos da lista, devemos explicitamente guardar o endereço de cada elemento da ista, o que é feito armazenando-se, junto com a informação de cada elemento, um ponteiro com o endereço para o próximo elemento da lista. Por isso, os elementos da lista estão ligados uns aos outros, encadeados e por conta desta característica a lista é também conhecida como lista encadeada.

## Lista x Array

https://www.caelum.com.br/apostila-java-orientacao-objetos/collections-framework/

## Como funciona uma lista

Item netra em qualquer posição livre, sem afetar a posição dos demais itens presentes na lista. na remoção acontece o mesmo, um item é removido deixando um espaço vazio (null) no lugar, sem deslocar quaisquer outro elemento.

## Aplicações das listas

## Estruturas ligadas/encadeadas

