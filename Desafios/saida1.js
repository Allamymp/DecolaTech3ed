/*
Desafio
O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

Conter 39 traços horizontais ( - ) na primeira linha;
Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
Repita o procedimento 2 quatro vezes;
Repita o procedimento 1.
No final deve ficar igual a imagem a seguir:

--------------------------------------- (39 traços)
|                                     |
|                                     |
|                                     |
|                                     |
|                                     |
--------------------------------------- (39 traços)
*/

// variáveis: 
var idx = 0; 
var controle = 0;
// Arrays:
const horizontal= [];
const vertical = [];



//código:
while(idx<=19){
  horizontal[idx]= "-";
  if(idx == 0 ){
      vertical[idx]= "|";
  }
  else if(idx==19){
      
    vertical[idx]="|";
  }
  else{
      vertical[idx]=" ";
  }
  idx++;
}

while(controle<=6){
    if (controle!= 0 && controle!=6){
        console.log(vertical.join(" "));
    }
    else{
        
        console.log(horizontal.join("-"));
    }
    controle++;
}



 