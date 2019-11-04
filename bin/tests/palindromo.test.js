const test = require('tape')
const palindromo = require('../algorithms/palindromo')

function validatePalindromo(){
	test('Verificar se é palindromo', (t) => {
		t.assert(palindromo.isPalindromo("ovo") === true, "Ovo é um palindromo")
		t.assert(palindromo.isPalindromo("Test set") === true, "Test set é um palindromo")
		t.assert(palindromo.isPalindromo("To idiot") === true, "To idiot é um palindromo")
	 	t.assert(palindromo.isPalindromo("casa") === false, "Casa não é um palindromo")
	 	t.end()
	})
}

module.exports = {validatePalindromo}