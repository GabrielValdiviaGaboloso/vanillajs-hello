// /* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = () => {
  // let randomNumber = Math.random() * 10;
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#escusa").innerHTML = generaExcuse();
  });
  console.log("Hello Rigo from the consoleeee!");
};

let generaExcuse = () => {
  let pronoun = ["A ", "The "];
  let subject = [" jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = [" took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = [" homework", "toe", "car", "shoe"];
  let where = [" on the street", "in my hause", "in my driveway"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjtIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    "" +
    subject[subjtIndex] +
    "" +
    action[actionIndex] +
    "" +
    possetion[possetionIndex] +
    "" +
    where[whereIndex]
  );
};
