#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};

// const msgBox = boxen( greeting, boxenOptions );
// console.log(msgBox);

const yargs = require("yargs");

const options = yargs
 .usage("Use: -w <word>")
 .option("w", { alias: "word", describe: "Digite uma palavara", type: "string", demandOption: true })
 .argv;

// const greeting = 'Hello, ${options.name}!';

// console.log(greeting);

var CheckIsPalindromo = function(word){

	if(!word){
		var greeting = chalk.white.bold('Digite uma palavra!');
	}
	else{

		var wordInverse = '';	
		for (var i = word.length; i >= 0; i--) {
		  wordInverse += word.charAt(i);
		}

		if(wordInverse == word){
		  var greeting = chalk.white.bold(`${wordInverse} é um palindromo!`);
		}
		else{
		  var greeting = chalk.white.bold(`${wordInverse} não é um palindromo!`);
		}
	}
	var msgBox = boxen( greeting, boxenOptions );
	console.log(msgBox);
}

CheckIsPalindromo(options.word);