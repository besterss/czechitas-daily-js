

/* Úkol č.1:
Napište funkci, která vypíše součet, rozdíl, násobek a podíl 2
zadaných čísel, rozdíl zobrazujte jako absolutní hodnotu.
*/

function srnp(x,y) {
 let soucet = x+y;
 let rozdil = x-y;
 let soucin = x*y;
 let podil = x/y;

 console.log("Soucet: "+x+"+"+y+"="+soucet)
 console.log("Rozdíl: "+x+"-"+y+"="+rozdil)
 console.log("Součin: "+x+"*"+y+"="+soucin)
 console.log("Podíl: "+x+"/"+y+"="+podil)
}

let x = Number(prompt("Zadej X"))
let y = Number(prompt("Zadej Y"))

srnp(x,y)


/* Úkol č.2:
Napište funkci, který vypíše informaci, zda zadané číslo je
nebo není prvočíslo.
- prvočíslo - dělitelné pouze 1 a samo sebou
- zbytek po dělení: % - modulo
- v první moment pčedpokládejme, ze číslo JE prvočíslo a
budeme případně rozporovat toto tvrzeni.
*/
