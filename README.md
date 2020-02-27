## Tipo abstrato de dado (TAD)

O tipo abstrato de dado (TAD) é uma especificação de um conjunto de dados e operações que podem ser executadas sobre esses dados. Além disso, é uma metodologia de programação que tem como proposta reduzir a informação necessária para a criação/programação de um algoritmo através da abstração das variáveis envolvidas em uma única entidade fechada, com operações próprias à sua natureza.

Um exemplo prático disto é o de um estudante. Em um projeto anterior à teoria de TAD, um estudante seria representado por variáveis soltas (como seu nome, sua idade e sua matrícula) que seriam operadas separadamente, sem ligação lógica entre elas além do conhecimento do programador de que a variável trata-se do nome da "entidade" estudante.

Conceitualmente um programa passou a ser projetado pensando que não há o nome, idade e matrícula do estudante, mas simplesmente o tipo estudante. Este tipo, como um tipo simples (inteiro ou string), deve ter operadores próprios. Assim, o estudante deve possuir operações desejáveis ao programador, como duplicar sua informação, validar a matrícula, verificar a idade, etc.

Na prática, o TAD é implementado usando-se um tipo composto (struct/record - estrutura/registro) com os valores pertencentes ao TAD (nome, idade, matrícula). E por funções que operam esta estrutura.

Exemplo:

```
 estrutura Estudante{
      Nome
      Idade
      Matricula
   }
   
   funcao Estudante_MaiorDeIdade(Estudante estudante) retorna booleano;
   funcao Estudante_ValidaMatricula(Estudante estudante);
```

A abstração de informações através do TAD permitiu a melhor compreensão dos algoritmos e maior facilidade de programação, e por consequência aumentou a complexidade dos programas, tornando-se fundamental em qualquer projeto de software a modelagem prévia de seus dados.

Um dos problemas que são enfrentados no TAD é que ele é uma estrutura metafórica gerada pela modelagem. Porém, em nível de implementação, não há nenhuma segurança que as operações e regras de operação desejadas para este tipo serão respeitadas.

Posteriormente, essa metodologia foi incorporada à própria linguagem de programação para um protótipo do que é hoje a orientação a objetos (OOP - Object Oriented Programming), permitindo o controle do acesso às informações de um tipo, a herança e o polimorfismo.

Alem do exemplo abaixo exitem os TAD básicos e padrão; Listas, Pilhas e Filas

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

