/*
Zadání:
• Žádej si od uživatele zadávat číslo TAK DLOUHO, dokud ti
nezadá číslo odlišné od 0.
• Pokud ti zadá 0, vypiš mu, že musí zadat číslo odlišné od
0.
• Po úspěšném zadání čísla, číslo vypiš.
*/
 
let cislo = Number(prompt("Zadej číslo odlišné od 0"))

while
(cislo === 0) 
{
  alert("Zadal jsi číslo: 0. Zadej prosím odlišné číslo od 0")
  cislo = Number(prompt("Zadej číslo odlišné od 0"))
}

console.log(cislo)
