var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const Initial = [
    "Eu tava aqui pensando…",
    "uma coisa que é muito louca é",
    "já reparou",
    "esses dias vi",
  ];
  const Object = [
    "que filho é muita treta né cara?",
    "que hoje em dia não pode mais fazer piada!",
    "que a minha sogra é foda meu",
    "que casamento é foda meu",
    "que minha esposa é foda meu",
    "que 2020 foi foda",
    "que geladeira é foda meu",
    "que segunda-feira é foda meu",
    "que sexo é foda meu",
    "que boleto é foda meu",
    "ter pau pequeno é foda!",
    "que o PT é foda meu",
  ];
  const Reactone = [
    "** aponta pro homem careca na segunda fileira **",
    "** segura o pedestal do microfone **",
    "** faz cara de cansado **",
    "** aponta pra mulher na mesa 4 **",
    "** puxa a calça pra cima **",
    "** balaça a cabeça negativamente **",
    "** enrola o fio do microfone na mão **",
    "** olha pra baixo e dá um sorriso **",
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
  ];
  const Ending = [
    "outra coisa que sempre penso:",
    "outra coisa que sempre falo:",
    "outra coisa que sempre me incomoda:",
  ];

  const Finish = [
    "e o PT?? Foda mano",
    "porque guardar feijão no pote de sorvete?! Porra!",
    "ser casado é foda!",
    "Sempre concorde com sua esposa caras",
    "A minha sogra!",
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
