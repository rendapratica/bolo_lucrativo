/* recipes-data.js — biblioteca inicial de receitas (somente leitura no app).

   COMO ADICIONAR MAIS RECEITAS:
   • Opção 1 (sem mexer em código): na página Receitas, clique em "Nova receita". Elas ficam salvas no
     navegador de quem cadastrou (entram no backup).
   • Opção 2 (para vender no produto): copie um bloco abaixo, mude os textos e cole no fim da lista.
     Todos os compradores passam a ver a receita. Mantenha `id` único (letras minúsculas e hífens).

   FOTOS: coloque a foto em img/receitas/<id>.jpg (use fotos suas ou com licença de uso) e escreva
   photo: 'img/receitas/<id>.jpg'. Se photo for null, o app mostra uma ilustração original.

   Os rendimentos, tempos, preços e prazos são orientações iniciais. Teste cada receita na sua cozinha,
   confira o custo na Calculadora e ajuste os prazos de validade às normas sanitárias da sua região. */
(function (global) {
  'use strict';
  const DL = (global.DL = global.DL || {});
  DL.RECIPE_SLOTS = 50;
  DL.RECIPES = [
  {
    "id": "bolo-chocolate-brigadeiro",
    "name": "Bolo de chocolate fofinho com brigadeiro",
    "category": "Bolos recheados",
    "art": "bolo-choc",
    "photo": null,
    "yield": "1 bolo de 22 cm (12 fatias)",
    "time": "1 h 15 min",
    "suggestedPrice": 55,
    "ingredients": [
      "3 ovos",
      "1 xícara (chá) de açúcar",
      "1/2 xícara (chá) de óleo",
      "1 xícara (chá) de leite",
      "2 xícaras (chá) de farinha de trigo",
      "1/2 xícara (chá) de chocolate em pó",
      "1 colher (sopa) de fermento em pó",
      "Cobertura: 1 lata de leite condensado, 1 colher (sopa) de manteiga, 4 colheres (sopa) de chocolate em pó e 1 caixinha de creme de leite"
    ],
    "steps": [
      "Pré-aqueça o forno a 180 °C e unte uma forma de 22 cm com furo no meio.",
      "Bata os ovos, o açúcar e o óleo até ficar um creme claro.",
      "Junte o leite e, aos poucos, a farinha e o chocolate peneirados, misturando até ficar liso.",
      "Acrescente o fermento por último, sem bater demais.",
      "Asse por 35 a 40 minutos, até o palito sair limpo. Deixe amornar e desenforme.",
      "Cobertura: leve o leite condensado, a manteiga e o chocolate ao fogo baixo, mexendo, até desgrudar do fundo. Junte o creme de leite, misture e deixe esfriar um pouco antes de cobrir."
    ],
    "storage": "Em local fresco, coberto, por até 3 dias. Com cobertura de brigadeiro, na geladeira por até 5 dias."
  },
  {
    "id": "bolo-cenoura-chocolate",
    "name": "Bolo de cenoura com cobertura de chocolate",
    "category": "Bolos simples",
    "art": "bolo-cenoura",
    "photo": null,
    "yield": "1 bolo de 25 cm (14 fatias)",
    "time": "1 h",
    "suggestedPrice": 40,
    "ingredients": [
      "3 cenouras médias descascadas e picadas",
      "4 ovos",
      "1/2 xícara (chá) de óleo",
      "2 xícaras (chá) de açúcar",
      "2 e 1/2 xícaras (chá) de farinha de trigo",
      "1 colher (sopa) de fermento em pó",
      "Cobertura: 1 xícara (chá) de açúcar, 3 colheres (sopa) de chocolate em pó, 1 colher (sopa) de manteiga e 1/2 xícara (chá) de leite"
    ],
    "steps": [
      "Pré-aqueça o forno a 180 °C e unte uma forma retangular.",
      "Bata no liquidificador as cenouras, os ovos e o óleo até ficar homogêneo.",
      "Junte o açúcar e bata mais um pouco. Transfira para uma tigela e misture a farinha peneirada.",
      "Acrescente o fermento e misture delicadamente. Asse por cerca de 40 minutos.",
      "Cobertura: leve todos os ingredientes ao fogo baixo, mexendo, por uns 5 minutos até engrossar. Cubra o bolo ainda morno."
    ],
    "storage": "Em local fresco, coberto, por até 3 dias. Na geladeira, por até 5 dias."
  },
  {
    "id": "bolo-fuba-cremoso",
    "name": "Bolo de fubá cremoso",
    "category": "Bolos simples",
    "art": "bolo-fuba",
    "photo": null,
    "yield": "1 bolo de 22 cm (12 fatias)",
    "time": "1 h",
    "suggestedPrice": 32,
    "ingredients": [
      "3 ovos",
      "1 xícara (chá) de açúcar",
      "1/2 xícara (chá) de óleo",
      "2 xícaras (chá) de leite",
      "1 xícara (chá) de fubá",
      "1 xícara (chá) de farinha de trigo",
      "1 colher (sopa) de fermento em pó",
      "Opcional: 50 g de queijo ralado"
    ],
    "steps": [
      "Pré-aqueça o forno a 180 °C e unte uma forma com furo no meio.",
      "Bata no liquidificador os ovos, o açúcar, o óleo, o leite e o fubá.",
      "Passe para uma tigela, junte a farinha e o queijo e misture bem.",
      "Acrescente o fermento por último e asse por 40 minutos."
    ],
    "storage": "Em local fresco, coberto, por até 3 dias."
  },
  {
    "id": "bolo-limao",
    "name": "Bolo de limão com glacê",
    "category": "Bolos simples",
    "art": "bolo-limao",
    "photo": null,
    "yield": "1 bolo de 22 cm (12 fatias)",
    "time": "1 h",
    "suggestedPrice": 38,
    "ingredients": [
      "3 ovos",
      "1 xícara (chá) de açúcar",
      "1/2 xícara (chá) de óleo",
      "1 xícara (chá) de leite",
      "Suco e raspas de 2 limões",
      "2 xícaras (chá) de farinha de trigo",
      "1 colher (sopa) de fermento em pó",
      "Glacê: 1 xícara (chá) de açúcar de confeiteiro e 3 colheres (sopa) de suco de limão"
    ],
    "steps": [
      "Pré-aqueça o forno a 180 °C e unte a forma.",
      "Bata os ovos, o açúcar e o óleo. Junte o leite, o suco e as raspas de limão.",
      "Misture a farinha peneirada e, por último, o fermento.",
      "Asse por 35 a 40 minutos.",
      "Glacê: misture o açúcar de confeiteiro com o suco até ficar fluido e espalhe sobre o bolo frio."
    ],
    "storage": "Em local fresco, coberto, por até 3 dias."
  },
  {
    "id": "bolo-ninho-morango",
    "name": "Bolo de ninho com morango",
    "category": "Bolos recheados",
    "art": "bolo-ninho",
    "photo": null,
    "yield": "1 bolo de 20 cm (10 fatias)",
    "time": "1 h 30 min",
    "suggestedPrice": 75,
    "ingredients": [
      "4 ovos",
      "1 xícara (chá) de açúcar",
      "1/2 xícara (chá) de óleo",
      "1 xícara (chá) de leite",
      "2 xícaras (chá) de farinha de trigo",
      "1/2 xícara (chá) de leite em pó",
      "1 colher (sopa) de fermento em pó",
      "Recheio: 1 lata de leite condensado, 1 colher (sopa) de manteiga, 3 colheres (sopa) de leite em pó e 1 caixinha de creme de leite",
      "300 g de morangos lavados e picados"
    ],
    "steps": [
      "Pré-aqueça o forno a 180 °C. Bata os ovos, o açúcar e o óleo, junte o leite e depois os secos peneirados. Fermento por último.",
      "Asse em duas formas de 20 cm por 30 minutos. Deixe esfriar e desenforme.",
      "Recheio: cozinhe o leite condensado com a manteiga e o leite em pó até desgrudar do fundo. Junte o creme de leite e deixe esfriar.",
      "Monte: camada de bolo, recheio, morangos picados e a segunda camada. Cubra com o restante do recheio e decore com morangos inteiros."
    ],
    "storage": "Na geladeira, por até 3 dias, por causa do morango. Retire 20 minutos antes de servir."
  },
  {
    "id": "bolo-coco-gelado",
    "name": "Bolo de coco gelado",
    "category": "Bolos recheados",
    "art": "bolo-coco",
    "photo": null,
    "yield": "1 bolo de 25 cm (14 fatias)",
    "time": "1 h + 3 h de geladeira",
    "suggestedPrice": 45,
    "ingredients": [
      "4 ovos",
      "1 xícara (chá) de açúcar",
      "1 xícara (chá) de farinha de trigo",
      "1 colher (sopa) de fermento em pó",
      "Calda: 1 lata de leite condensado, 1 xícara (chá) de leite e 1 vidro (200 ml) de leite de coco",
      "100 g de coco ralado"
    ],
    "steps": [
      "Pré-aqueça o forno a 180 °C. Bata as claras em neve, junte as gemas e o açúcar e misture a farinha com o fermento delicadamente.",
      "Asse por 30 minutos em forma retangular e fure o bolo ainda quente com um garfo.",
      "Misture os ingredientes da calda e despeje sobre o bolo.",
      "Cubra com o coco ralado e leve à geladeira por 3 horas antes de servir."
    ],
    "storage": "Na geladeira, coberto, por até 4 dias."
  },
  {
    "id": "bolo-red-velvet",
    "name": "Bolo red velvet com cream cheese",
    "category": "Bolos de festa",
    "art": "bolo-redvelvet",
    "photo": null,
    "yield": "1 bolo de 20 cm com 2 camadas (12 fatias)",
    "time": "1 h 30 min",
    "suggestedPrice": 95,
    "ingredients": [
      "2 e 1/2 xícaras (chá) de farinha de trigo",
      "1 e 1/2 xícara (chá) de açúcar",
      "1 colher (sopa) de cacau em pó",
      "1 colher (chá) de bicarbonato de sódio",
      "2 ovos",
      "1 xícara (chá) de óleo",
      "1 xícara (chá) de leite com 1 colher (sopa) de vinagre (deixe descansar 5 minutos)",
      "1 colher (chá) de baunilha",
      "1 colher (sopa) de corante vermelho em gel",
      "Cobertura: 300 g de cream cheese, 100 g de manteiga sem sal em temperatura ambiente e 2 xícaras (chá) de açúcar de confeiteiro"
    ],
    "steps": [
      "Pré-aqueça o forno a 180 °C e unte duas formas de 20 cm.",
      "Misture a farinha, o açúcar, o cacau e o bicarbonato.",
      "Bata os ovos com o óleo, o leite com vinagre, a baunilha e o corante. Junte aos secos e misture até ficar liso.",
      "Divida nas formas e asse por 30 a 35 minutos. Deixe esfriar por completo.",
      "Cobertura: bata a manteiga com o açúcar, junte o cream cheese gelado e misture só até incorporar.",
      "Recheie e cubra o bolo. Mantenha refrigerado."
    ],
    "storage": "Na geladeira, por até 5 dias, por causa do cream cheese."
  },
  {
    "id": "bolo-pote-chocolate",
    "name": "Bolo no pote de chocolate com brigadeiro",
    "category": "Bolos no pote",
    "art": "pote-choc",
    "photo": null,
    "yield": "8 potes de 180 ml",
    "time": "40 min + 30 min de forno",
    "suggestedPrice": 11,
    "ingredients": [
      "Massa: 3 ovos, 1 xícara de açúcar, 1/2 xícara de óleo, 1 xícara de farinha de trigo, 1/2 xícara de chocolate em pó, 1/2 xícara de leite morno, 1 colher (sopa) de fermento",
      "Recheio: 1 receita de brigadeiro cremoso (ponto mole)",
      "Cobertura: granulado e brigadeiros pequenos",
      "8 potes de 180 ml com tampa"
    ],
    "steps": [
      "Bata os ovos, o açúcar e o óleo até ficar claro. Junte o leite morno.",
      "Misture a farinha e o chocolate peneirados, mexa até ficar homogêneo e finalize com o fermento.",
      "Asse em forma untada a 180 °C por cerca de 30 minutos. Deixe esfriar e esfarele grosseiramente.",
      "Monte os potes em camadas: bolo, brigadeiro cremoso, bolo, brigadeiro.",
      "Finalize com granulado e um brigadeiro no topo. Feche com a tampa."
    ],
    "storage": "Na geladeira, bem fechado, por até 4 dias. Mantenha refrigerado durante a entrega."
  },
  {
    "id": "bolo-pote-ninho-morango",
    "name": "Bolo no pote de ninho com morango",
    "category": "Bolos no pote",
    "art": "pote-ninho",
    "photo": null,
    "yield": "8 potes de 180 ml",
    "time": "45 min + 30 min de forno",
    "suggestedPrice": 12,
    "ingredients": [
      "Massa branca: 3 ovos, 1 xícara de açúcar, 1/2 xícara de óleo, 1 xícara de leite, 2 xícaras de farinha de trigo, 1 colher (sopa) de fermento",
      "Creme: 1 lata de leite condensado, 2 colheres (sopa) de leite em pó, 1 caixinha de creme de leite, 1 colher (sopa) de manteiga",
      "Recheio: 300 g de morangos picados + 2 colheres (sopa) de açúcar",
      "Morangos inteiros para decorar"
    ],
    "steps": [
      "Bata os ovos, o açúcar e o óleo; alterne o leite e a farinha e termine com o fermento. Asse a 180 °C por cerca de 30 minutos e deixe esfriar.",
      "Para o creme, cozinhe o leite condensado, o leite em pó e a manteiga em fogo baixo até engrossar; fora do fogo, misture o creme de leite. Deixe esfriar.",
      "Cozinhe os morangos com o açúcar por 8 minutos até formar uma geleia leve; esfrie.",
      "Monte os potes: massa esfarelada, creme, morangos, repetindo as camadas.",
      "Decore com um morango e feche com a tampa."
    ],
    "storage": "Na geladeira, bem fechado, por até 3 dias, pois leva fruta fresca. Prefira entrega no mesmo dia."
  },
  {
    "id": "ganache-chocolate",
    "name": "Ganache de chocolate para cobertura",
    "category": "Coberturas e recheios",
    "art": "ganache",
    "photo": null,
    "yield": "Cobre 1 bolo de 22 cm",
    "time": "20 min + 1 h de descanso",
    "suggestedPrice": 18,
    "ingredients": [
      "200 g de chocolate meio amargo picado",
      "200 g de creme de leite fresco (ou 1 caixinha)",
      "1 colher (sopa) de manteiga sem sal"
    ],
    "steps": [
      "Aqueça o creme de leite até começar a soltar fumaça, sem ferver.",
      "Despeje sobre o chocolate picado, espere 1 minuto e misture até ficar liso e brilhante. Junte a manteiga.",
      "Para cobrir, use morna e fluida. Para rechear ou fazer trufas, deixe firmar em temperatura ambiente."
    ],
    "storage": "Na geladeira, em recipiente fechado, por até 5 dias."
  }
];
})(typeof globalThis !== 'undefined' ? globalThis : window);
