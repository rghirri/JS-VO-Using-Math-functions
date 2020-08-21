var Fahrenheit_Temperature = Math.random();
var Celsius_Temperature = ((Fahrenheit_Temperature - 32)*5)/9;
document.getElementById("demo").innerHTML =
"It is " +Fahrenheit_Temperature+' \xB0'+"F today. That's "+Celsius_Temperature+' \xB0'+'C.';