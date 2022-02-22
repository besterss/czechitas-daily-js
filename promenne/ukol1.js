/*
Založte proměnné pro jméno, věk, váhu v kg a  výšku  v metrech - nastavte jim libovolnou hodnotu.
Spočtěte BMI

Do konzole vypište větu ve formátu:

Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.

vzoreček pro BMI je:   
  váha v kilogramech  / výška v metrech na druhou


*/

let jmeno = "Petra"
let vek = 34
let vaha = 65
let vyska = 1.67

let bmi = vaha/vyska**2

console.log("Jmenuji se " + jmeno + 
            ", je mi " + vek + 
            ", vážím " + vaha + 
            "kg, a moje BMI je "+ bmi)


