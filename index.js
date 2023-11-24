const prompt = require('prompt-sync')({ sigint: true });
const QuestionGenerator = require('./QuestionGenerator');

console.log("Generate Question Paper...");
console.log("Which subject do you want?");
var sub = prompt('press 1 for Physics or 2 for Maths or 3 for Chemistry: ');

let t1, t2;

if (sub == 1) {
  t1 = "Force";
  t2 = "Optics";
} else if (sub == 2) {
  t1 = "Calculus";
  t2 = "Trigonometry";
} else {
  t1 = "Organic";
  t2 = "Physical";
}

const totalMarks = 100;
const easyPercentage = parseFloat(prompt('How many % worth of marks should be easy level? (in percentage): '));
const mediumPercentage = parseFloat(prompt('How many % worth of marks should be medium level? (in percentage): '));
const hardPercentage = parseFloat(prompt('How many % worth of marks should be hard level? (in percentage): '));

const pG = new QuestionGenerator();
pG.createPaperWithoutOptions(sub - 1, totalMarks, easyPercentage, mediumPercentage, hardPercentage);
console.log("Question Paper generated");
