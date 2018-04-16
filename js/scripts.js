var a = 2;
var b = 4;
var value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

if (value>=0) {

    if (value>0) {
        console.log('Wynik dodatni');
    }
    else {
     console.log('Wynik rowny zero');
    } 
}
    
else {
    console.log('Wynik ujemny');
  }