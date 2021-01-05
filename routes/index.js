var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const Initial = [
    "Eu tava aqui pensando…",
    "já reparou",
    "esses dias eu vi",
    "cê já viu",
    "já percebeu",
    "já parou pra pensar",
  ];
  const Object = [
    "que filho é muita treta né cara?",
    "que hoje em dia não pode mais fazer piada!",
    "que a minha sogra é foda meu",
    "que casamento é foda meu",
    "que minha esposa é foda meu",
    "que 2020 foi foda",
    "que segunda-feira é foda meu",
    "que sexo é foda meu",
    "que boleto é foda meu",
    "que ter pau pequeno é foda!",
    "que o PT é foda meu",
    "que a smart fit é foda meu",
  ];
  const Reactone = [
    "** aponta pro homem careca na segunda fileira **",
    "** aponta pro homem barrigudo na terceira fileira **",
    "** segura o pedestal do microfone **",
    "** faz cara de cansado **",
    "** aponta pra mulher na mesa quatro **",
    "** puxa a calça pra cima **",
    "** balaça a cabeça negativamente **",
    "** enrola o fio do microfone na mão **",
    "** olha pra baixo e dá um sorriso **",
    "** espera terminar os aplausos **",
  ];
  const Question = [
    "né?",
    "hem?",
    "é sério..",
    "não concorda comigo?",
    "cê não acha?",
    "falaê?!",
  ];
  const PeopleReact = [
    "** plateia explode de rir **",
    "** a mulher da quinta fileira cutuca o marido **",
    "** plateia ri timidamente **",
    "** homem branco de meia idade ri exaustivamente **",
    "** garçom derruba a garrafa **",
    "** Casal da mesa 6 discute **",
    "** Silêncio no bar **",
    "** Mulher da mesa 1 se levanta e vai embora **",
    "** Plateia ri por 5 minutos e aplaude **",
    "** Plateia aplaude **",
    "** Jovem da mesa do fundo gargalha **",
    "** Senhor da mesa 3 engasga de tanto rir **",
  ];
  const Ending = [
    "outra coisa que sempre penso:",
    "outra coisa que sempre falo:",
    "outra coisa que sempre me incomoda:",
    "ai ai ai...  ",
    "falando nisso...",
  ];

  const Finish = [
    "e o PT?? Foda mano",
    "e esse politicamente correto?",
    "porque guardar feijão no pote de sorvete?! Porra!",
    "ser casado é foda...",
    "Sempre concorde com sua esposa cara",
    "A minha sogra...",
    "O Lula...",
    "quem coloca Uva passa no arroz?!",
    "quem inventou a Maçã na maionese?!",
    "o reveillon é foda",
    "o Neymar...",
    "E o personal trainer da minha esposa?",
    "E o amigo secreto?",
    "O grupo de whatsapp da família?",
    "Quem aqui também já foi ~cancelado~ na internet?",
  ];

  const getRandomArbitrary = (array) => {
    return Math.floor(Math.random() * (array.length - 0) + 0);
  };

  const Joke = `
${Initial[getRandomArbitrary(Initial)]}
${Object[getRandomArbitrary(Object)]}
${Reactone[getRandomArbitrary(Reactone)]}
${Question[getRandomArbitrary(Question)]}
...
${PeopleReact[getRandomArbitrary(PeopleReact)]}
${Ending[getRandomArbitrary(Ending)]}
...
${Finish[getRandomArbitrary(Finish)]}
...
..
.
  `;

  console.log(Joke);

  res.render("index", {
    title: "Stand Up Commedy Online",
    initial: Initial[getRandomArbitrary(Initial)],
    object: Object[getRandomArbitrary(Object)],
    react: Reactone[getRandomArbitrary(Reactone)],
    question: Question[getRandomArbitrary(Question)],
    peopleReact: PeopleReact[getRandomArbitrary(PeopleReact)],
    ending: Ending[getRandomArbitrary(Ending)],
    finish: Finish[getRandomArbitrary(Finish)],
  });
});

module.exports = router;
