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

var isPalindromo = function(word){

	var wordInverse = '';	
	word = word.toLowerCase().replace(/\s/g, '');
	
	for (var i = word.length; i >= 0; i--) {
	  wordInverse += word.charAt(i);
	}

	return wordInverse == word;
}

var checkIsPalindromo = function(word){

	if(!word){
		var greeting = chalk.white.bold('Digite uma palavra!');
	}
	else{	

		if(isPalindromo(word)){
		  var greeting = chalk.white.bold(`${wordInverse} é um palindromo!`);
		}
		else{
		  var greeting = chalk.white.bold(`${wordInverse} não é um palindromo!`);
		}
	}
	var msgBox = boxen( greeting, boxenOptions );
	console.log(msgBox);
}

var validateText = function(){
	const yargs = require("yargs");

	const options = yargs
	 .usage("Use: -w <word>")
	 .option("w", { alias: "word", describe: "Digite uma palavara", type: "string", demandOption: true })
	 .argv;

	checkIsPalindromo(options.word);
}

module.exports = {validateText}
module.exports = {isPalindromo}