//falso si no selecciona region
const validateRegion = (region) => {
  if (!region) return false;
}

//falso si no selecciona comuna
const validateComuna = (comuna) => {
  if (!comuna) return false;
}

//falso si no indica calle-numero
const validateCalleNumero = (calleNumero) => {
  if (!calleNumero) return false;
}

//falso si no selecciona tipo
const validateTipo = (tipo) => {
  if (!tipo) return false;
}

//falso si no indica cantidad
const validateCantidad = (cantidad) => {
  if (!cantidad) return false;
}

//falso si no indica fecha
const validateFecha = (fecha) => {
  if (!fecha) return false;
}

const validateEmail = (email) => {
  if (!email) return false;
  // validacion largo
  let lengthValid = email.length > 15;

  // validacion formato w3.org
  let re = /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let formatValid = re.test(email);

  // retorna AND de ambas validaciones anteriores
  return lengthValid && formatValid;
};

const validateCelular = (celular) => {
  if (!celular) return true;
  // validacion largo
  let lengthValid = celular.length >= 8;

  // validacion formato
  // acepta   +562 12345678 
  //          +56212345678
  //          912345678
  let re = /^(\+\d{2,3})?\s?\d{8,9}$/
  let formatValid = re.test(celular);

  // retorna AND de ambas validaciones anteriores.
  return lengthValid && formatValid;
};

const validateFoto1 = (foto1) => {
  if (!foto1) return false;
  // valida tipo de archivo
  let typeValid = true;

  // file.type debe ser "image/<foo>" o "application/pdf"
  typeValid &&= foto1.type == "image" || foto1.type == "application/pdf";

  return typeValid;
};

const validateFoto2 = (foto2) => {
  if (!foto2) return true;
  else{
    let typeValid = true;
    typeValid &&= foto2.type == "image" || foto2.type == "application/pdf";
    return typeValid;
  }
}

const validateFoto3 = (foto3) => {
  if (!foto3) return true;
  else{
    let typeValid = true;
    typeValid &&= foto3.type == "image" || foto3.type == "application/pdf";
    return typeValid;
  }
}

//retorna falso si no indica nombre
const validateNombre = (nombre) => {
  if (!nombre) return false;
}

const validateForm = () => {
  // obntener elementos del DOM
  let myForm = document.forms["agregar-donacion-form"];
  let email = myForm["email"].value;
  let celular = myForm["celular"].value;
  let region = myForm["region"].value;
  let comuna = myForm["comuna"].value;
  let calleNumero = myForm["calle-numero"].value;
  let tipo = myForm["tipo"].value;
  let cantidad = myForm["cantidad"].value;
  let fecha = myForm["fecha-disponibilidad"].value;
  let foto1 = myForm["foto1"].value;
  let foto2 = myForm["foto2"].value;
  let foto3 = myForm["foto3"].value;
  let nombre = myForm["nombre"].value;

  // variables auxiliares y funcion
  let invalidInputs = [];
  let isValid = true;
  const setInvalidInput = (inputName) => {
    invalidInputs.push(inputName);
    isValid &&= false;
  };

  // validacion logica
  if (!validateRegion(region)) {
    setInvalidInput("Región")
  }
  if (!validateComuna(comuna)) {
    setInvalidInput("Comuna")
  }
  if (!validateCalleNumero(calleNumero)){
    setInvalidInput("Calle y número")
  }
  if (!validateTipo(tipo)){
    setInvalidInput("Tipo")
  }
  if (!validateCantidad(cantidad)){
    setInvalidInput("Cantidad")
  }
  if (!validateFecha(fecha)){
    setInvalidInput("Fecha")
  } 
  if (!validateEmail(email)) {
    setInvalidInput("Email");
  }
  if (!validateCelular(celular)) {
    setInvalidInput("Celular");
  }
  if (!validateFoto1(foto1)) {
    setInvalidInput("Foto 1");
  }
  if (!validateFoto2(foto2)) {
    setInvalidInput("Foto 2");
  }
  if (!validateFoto3(foto3)) {
    setInvalidInput("Foto 3");
  }
  if (!validateNombre(nombre)){
    setInvalidInput("Nombre");
  }

  
  // display de validacion final
  let validationBox = document.getElementById("val-box");
  let validationMessageElem = document.getElementById("val-msg");
  let validationListElem = document.getElementById("val-list");

  if (!isValid) {
    validationListElem.textContent = "";
    // agregar elementos a val-list
    for (input of invalidInputs) {
      let listElement = document.createElement("li");
      listElement.innerText = input;
      validationListElem.append(listElement);
    }
    // set val-msg
    validationMessageElem.innerText = "Corrige los siguientes datos:";

    // hace validacion-box visible
    validationBox.hidden = false;
  } else {
    myForm.submit();
  }
};

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", validateForm);
