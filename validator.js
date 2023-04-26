//const validator1 = document.getElementById("cardNumber")
//console.log("validation in progress...");

//Validador de numero de TDC
const validator = {
  isValid: function (cardNumber) {
    //convirtiendo en un string del textInput y reversandolo
    const nSpringRevers = cardNumber.toString().split("").reverse();
    //console.log(nSpringRevers);
    //Ahora haremos el recorrido del array
    let i = 0
    let totalAdd = 0;
    for (i; i < nSpringRevers.length; i++) {
      //buscando las posiciones pares del Array
      let pairN;
      let oneDigit;
      //let TotalAdd;
      if ((i + 1) % 2 === 0) {
        pairN = (2 * parseInt(nSpringRevers[i])); //multiplique x2
        //console.log(pairN)
        if (pairN >= 10) {    //si es mayor a 10
          oneDigit = pairN - 9 // es de dos digitos?
          totalAdd += oneDigit;  //acumula los oneDigit que vas operando
        } else {
          totalAdd += pairN; //acumula los n pair que son de 1 digito
        }
      }
      else {
        totalAdd += parseInt(nSpringRevers[i]) //acumula los numeros restanres del array
      }
      //console.log(totalAdd)
    }
    if (totalAdd % 10 === 0) {
      //console.log('Valid');
      return true;
    } else {
      //console.log('Invalid');
      return false;
    }
  },
  maskify: (cardNumber) => {
    let maskNumber = "";
    let lastFour = "";
    let i = 0
    //recorremos los digitos de la tdc
    for (i = 0; i < cardNumber.length - 4; i++) {
      maskNumber += "#";
    }
    //console.log(maskNumber)
    if (i <= 4) { //si ingresan de 1 a 4 digitos no enmascara nada
      lastFour += cardNumber[i]
    }
    else { //para cuando ingrean mas de 4 digitos
      for (let i = cardNumber.length - 4; i < cardNumber.length; i++) {
        lastFour += cardNumber[i]
        //console.log(lastFour)
      }
    }
    //console.log(lastFour)
    const finalNumber = maskNumber + lastFour //concatenando los digitos
    return finalNumber;
  }
}
export default validator;
