"use strict";

//             VARIABLES
const gameBox = document.querySelector(".game-box");
const btnNext = document.querySelector(".btn-next");
const question = document.querySelector(".question");
const btnAnswer_A = document.querySelector(".btn-answer-A");
const btnAnswer_B = document.querySelector(".btn-answer-B");
const btnAnswer_C = document.querySelector(".btn-answer-C");
const btnAnswer_D = document.querySelector(".btn-answer-D");
const btnAnswers = document.querySelectorAll(".btn-answer");
const pointsCount = document.querySelector(".points");
const questionNumber = document.querySelector(".question-number");

// Game variables

let questionsCount = 0;
let points = 0;
let next = false;
let clickAnswer = true;
// Questions [Q] & Correct answers array

const Q2 = "Ilgiausia Lietuvos upė?";
const Q3 = "Giliausias Lietuvos ežeras?";
const Q4 = "Populiariausia Lietuvos krepšinio komanda?";
const Q5 = "Koks miesto pavadinimas, kurio herbe yra pavaizduotas jautis?";
const Q6 = "Didžiausia Nemuno deltos sala?";
const Q7 = "2022 metų Lietuvos kultūros sostinė?";
const Q8 = "Kas parašė Lietuvos himną?";
const Q9 = "Miesto pavadinimas, kuris yra taip pat ir upės pavadinimas?";
const Q10 = "Pirmoji vakarų valstybė pripažinusi Lietuvos nepriklausomybę?";
const Q11 = "10 didžiausias Lietuvos miestas pagal gyventojų skaičių (2020m)?";
const Q12 = "Kas parašė dainą 'Trys Milijonai'?";
const Q13 = "Kokia upė teka per Vilnių?";
const Q14 =
  "Koks buvo pereinamasis Lietuvos Respublikos laikinasis popierinis pinigas?";
const Q15 = "Kokia buvo pirmoji Lietuvos religija prieš Mindaugo karūnavimą?";
const Q16 = "Ką reiškia trumpinys LDK?";
const Q17 = "Didžiausia Lietuvos kalva?";
const Q18 = "2 pagal dydį Lietuvos giria?";
const Q19 = "Didžiausias riedulys Lietuvoje?";
const Q20 = "Ką reiškia trumpinys KMHB?";

const answers = [
  "Vilnius",
  "Nemunas",
  "Tauragnas",
  "Žalgiris",
  "Pasvalys",
  "Rusnė",
  "Kaunas",
  "V.Kudirka",
  "Šventoji",
  "Islandija",
  "Utena",
  "M.Mikutavičius",
  "Neris",
  "Auksinas",
  "Pagonybė",
  "Lietuvos Didžioji Kunigaikštystė",
  "Aukštojas",
  "Labanoro giria",
  "Barstyčių",
  "Karaliaus Mindaugo Husarų Batalionas",
];

//           FUNCTIONS

// not neccesary
// const correctChoice = function (correctChoice) {
//   btnAnswers.forEach((btn) => {
//     btn.style.backgroundColor = "red";
//     correctChoice.style.backgroundColor = "green";
//   });
// };

// const wrongChoice = function () {
//   btnAnswers.forEach((btn) => {
//     btn.style.backgroundColor = "red";
//     if (btn.textContent.includes(answers[questionsCount]))
//       btn.style.backgroundColor = "green";
//   });
// };

const nextQuestion = function (questions, A, B, C, D) {
  question.textContent = questions;
  btnAnswer_A.textContent = A;
  btnAnswer_B.textContent = B;
  btnAnswer_C.textContent = C;
  btnAnswer_D.textContent = D;
};

gameBox.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn-answer");
  if (!clicked) return;
  btnAnswers.forEach((btn) => {
    btn.style.backgroundColor = "red";
  });

  // if (clicked.textContent.includes(answers[questionsCount])) {
  //   clicked.style.backgroundColor = "green";
  // } else {

  btnAnswers.forEach((btn) => {
    if (btn.textContent.includes(answers[questionsCount]))
      btn.style.backgroundColor = "green";
  });
  if (clicked.textContent.includes(answers[questionsCount])) {
    if (clickAnswer) {
      points++;
      pointsCount.textContent = points;
    }
  }
  // clickAnswer = false;
  // next = true;
  if (clickAnswer) clicked.style.border = "2px solid white";
  clickAnswer = false;
  next = true;
});

btnNext.addEventListener("click", function () {
  if (next) {
    btnAnswers.forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.border = "";
    });
    questionsCount++;
    clickAnswer = true;
    next = false;
    questionNumber.textContent = `${questionsCount + 1}/${answers.length}`;

    if (questionsCount === 1) {
      nextQuestion(Q2, "Nemunas", "Šventoji", "Neris", "Nilas");
    }
    if (questionsCount === 2) {
      nextQuestion(Q3, "Tauragnas", "Tauras", "Vištyčių", "Tauranas");
    }
    if (questionsCount === 3) {
      nextQuestion(Q4, "Rytas", "Lietkabelis", "Juventus", "Žalgiris");
    }
    if (questionsCount === 4) {
      nextQuestion(Q5, "Marijampolė", "Pasvalys", "Pakruojis", "Biržai");
    }
    if (questionsCount === 5) {
      nextQuestion(Q6, "Lipakė", "Kretinga", "Nida", "Rusnė");
    }
    if (questionsCount === 6) {
      nextQuestion(Q7, "Kaunas", "Vilnius", "Utena", "Klaipėda");
    }
    if (questionsCount === 7) {
      nextQuestion(Q8, "Maironis", "A.Vienuolis", "V.Kudirka", "A.Smetona");
    }
    if (questionsCount === 8) {
      nextQuestion(Q9, "Nevėžis", "Šventoji", "Sartų", "Neris");
    }
    if (questionsCount === 9) {
      nextQuestion(Q10, "Vokietija", "Danija", "Islandija", "Airija");
    }
    if (questionsCount === 10) {
      nextQuestion(Q11, "Ukmergė", "Šilalė", "Utena", "Raseiniai");
    }
    if (questionsCount === 11) {
      nextQuestion(
        Q12,
        "M.Mikutavičius",
        "E.Dragūnas",
        "D.Montvydas",
        "V.Bareikis"
      );
    }
    if (questionsCount === 12) {
      nextQuestion(Q13, "Nevėžis", "Nemunas", "Šventoji", "Neris");
    }
    if (questionsCount === 13) {
      nextQuestion(Q14, "Latas", "Auksinas", "Rublinas", "Litas");
    }
    if (questionsCount === 14) {
      nextQuestion(Q15, "Pagonybė", "Judaizmas", "Budizmas", "Ateizmas");
    }
    if (questionsCount === 15) {
      nextQuestion(
        Q16,
        "Lietuvos drugelių klubas",
        "Lietuvos Didžioji Kunigaikštystė",
        "Lenkijos draugijos komitetas",
        "Labai daug kebabų"
      );
    }
    if (questionsCount === 16) {
      nextQuestion(Q17, "Aukštikas", "Raganų Kalnas", "Aukštojas", "Kalvinas");
    }
    if (questionsCount === 17) {
      nextQuestion(
        Q18,
        "Šervudo giria",
        "Labanoro giria",
        "Šimonių giria",
        "Anykščių giria"
      );
    }
    if (questionsCount === 18) {
      nextQuestion(Q19, "Barstyčių", "Puntuko", "Velnio akmuo", "Akmeno");
    }
    if (questionsCount === 19) {
      nextQuestion(
        Q20,
        "Kaip Man Hujova Buvo",
        "Kažkada Mes Husarai Buvome",
        "Karaliaus Mindaugo Husarų Batalionas",
        "Kur Mes Herkonus Bandėm"
      );
    }
    if (questionsCount === 20) {
      next = false;
      clickAnswer = false;
      gameBox.style.display = "none";
      document.querySelector(".question-number-text").style.display = "none";
      document.querySelector(".points-box").style.display = "none";

      document.querySelector(".points-end").style.display = "flex";
      if (points < 10) {
        document.querySelector(
          ".points-end-text"
        ).textContent = `Atsakei teisingai į ${points} klausimus`;
      }
      if (points < 20 && points >= 10) {
        document.querySelector(
          ".points-end-text"
        ).textContent = `Atsakei teisingai į ${points} klausimų`;
      }
    }
    document.querySelector(".points-end-num").textContent = `${(
      (points * 100) /
      questionsCount
    ).toFixed(0)}% teisingų atsakymų`;
    document.querySelector(".points-end-num").style.color = "green";
    document.querySelector(".points-end-num").style.fontWeight = "bold";
  }
});
