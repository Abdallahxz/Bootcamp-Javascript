function tellMeAboutNumber(number) {
    if (number > 0) {
        console.log(`El número ${number} es positivo`);
    } else if (number < 0) {
        console.log(`El número ${number} es negativo`);
    } else {
        console.log(`El número ${number} es cero`);
    }    
}

tellMeAboutNumber(0);
tellMeAboutNumber(33);
tellMeAboutNumber(-42);
/*

let numero_1 = 0; 

if (numero_1 > 0) {
  console.log(`El número ${numero_1} es positivo`);
} else if (numero_1 < 0) {
  console.log(`El número ${numero_1} es negativo`);
} else {
  console.log(`El número ${numero_1} es cero`);
}

let numero_2 = 33; 

if (numero_2 > 0) {
  console.log(`El número ${numero_2} es positivo`);
} else if (numero_2 < 0) {
  console.log(`El número ${numero_2} es negativo`);
} else {
  console.log(`El número ${numero_2} es cero`);
}

let numero_3 = -42;

if (numero_3 > 0) {
  console.log(`El número ${numero_3} es positivo`);
} else if (numero_3 < 0) {
  console.log(`El número ${numero_3} es negativo`);
} else {
  console.log(`El número ${numero_3} es cero`);
}
*/