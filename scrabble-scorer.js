// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");
let userword = "";
let usernumber;
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

 function simpleScorer(word) {
	//console.log(word);
   word = word.toUpperCase();
	let letterPointsSS = 0;
 
	for (let i = 0; i < word.length; i++) {
 
//	  for (const pointValue in oldPointStructure) {
 
//		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPointsSS += 1; 
//		 }
 
	  }
	
	return letterPointsSS;
 }

 

 function vowelBonusScorer(word) {
	word = word.toUpperCase();
	let letterPointsvBS = 0;
   Vowels = ["A", "E", "I", "O", "U"];
	for (let i = 0; i < word.length; i++) {
   
 //	  for (const pointValue in oldPointStructure) {
 
		 if (Vowels.includes(word[i])) {
			letterPointsvBS += 3; } 
         else {
            letterPointsvBS += 1;
         } 
//		 }
 
	  }
	
	return letterPointsvBS;
 }

 //let simpleScorer;

 let simpleScorerObj = {
   name: "Simple Score",
   description: "Simple: One point per character",
   scoringFunction: simpleScorer
 };

 //let vowelBonusScorer;

 let vowelBonusScorerObj = {
   name: "Vowel Bonus",
   description: "Vowel Bonus: Vowels are worth 3 points",
   scoringFunction: vowelBonusScorer
 };

 let oldScrabbleScorerObj = {
   name: "Scrabble Score",
   description: "Scrabble: Uses scrabble point system",
   scoringFunction: oldScrabbleScorer
 //  scoringFunction: scrabbleScorer
 };

 let newScrabbleScorerObj = {
   name: "Scrabble Score",
   description: "Scrabble: Uses scrabble point system",
   scoringFunction: scrabbleScorer
 //  scoringFunction: scrabbleScorer
 };

 scoringAlgorithms = [simpleScorerObj, vowelBonusScorerObj, newScrabbleScorerObj];


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //


//let scrabbleScorer;
function scrabbleScorer(word) {
	word = word.toLowerCase();
	let letterPoints1 = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	//  for (const pointValue in oldPointStructure) {
 
	//	 if (oldPointStructure[pointValue].includes(word[i])) {
	//		letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         letterPoints1 += (newPointStructure[word[i]]);
   //      console.log(newPointStructure[word[i]]);
   //      console.log(letterPoints1);
		 }
 
	return letterPoints1;
 }

//const scoringAlgorithms = [];
//scoringAlgorithms = [simpleScorerObj, vowelBonusScorerObj, oldScrabbleScorerObj];
//scoringAlgorithms = [simpleScorerObj, vowelBonusScorerObj, scrabbleScorer];

function initialPrompt() {
   userword = input.question("Let's play some scrabble! Enter a word: ");
 //  console.log(oldScrabbleScorer(userword));
      // Simple scoring
  //    console.log("algorithm name: ", scoringAlgorithms[0].name);
  //    console.log("scoringFunction result: ", scoringAlgorithms[0].scoringFunction("JavaScript"));
 
 //console.log(newPointStructure);
};

function scorerPrompt() {
   usernumber = input.question("Which scoring algorithm would you like to use?\n\n" + "0 - Simple: One point per character\n" + "1 - Vowel Bonus: Vowels are worth 3 points\n" + "2 - Scrabble: Uses scrabble point system\n" + "Enter 0, 1, or 2: ");
 //usernumber = input.question(scorerPrompt());
 while (isNaN(usernumber) || usernumber > 2 || usernumber < 0) {  
 //  console.log (usernumber);
 usernumber = input.question("Which scoring algorithm would you like to use?\n\n" + "0 - Simple: One point per character\n" + "1 - Vowel Bonus: Vowels are worth 3 points\n" + "2 - Scrabble: Uses scrabble point system\n" + "Enter 0, 1, or 2: ");
  // console.log(scoringAlgorithms[usernumber]);
 }
 return scoringAlgorithms[usernumber]
}

let newPointStructure = transform(oldPointStructure);

function transform(oldPointStructure1) {
 //  console.log(oldPointStructure1);
   i = 0;
   temparray = [];
   tempnum = 0;
   tempchar = "";
   let newPointStructure1 = {};
for (item in oldPointStructure1) {
   temparray = oldPointStructure1[item];
//   console.log(temparray);
   for (j=0; j < temparray.length; j++) {
   //   console.log("megha");
   //   console.log(item.length);
   tempnum = Number(item);
   //tempchar = newPointStructure1[temparray[j]];
   //console.log(tempchar);
   //newPointStructure1[i] = tempchar.toLowerCase();
   newPointStructure1[temparray[j].toLowerCase()] = tempnum;
   //i++;
  // console.log (i);

   }
}
return newPointStructure1;
};


function runProgram() {
   let obj;
   initialPrompt();
   obj = scorerPrompt();
//   console.log (obj);
   console.log(`Score for '${userword}': ${obj.scoringFunction(userword)}`);

   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
