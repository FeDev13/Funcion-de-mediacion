//Variables
const lista = ["desalojo", "ejecucion"];
const excepciones = [
  "amparo",
  "divorcio",
  "causa penal",
  "incapacidad",
  "medidas cautelares",
  "prueba anticipada",
  "diligencias preliminares",
  "sucesion",
  "concurso",
  "quiebra",
];

// Button Selector
const addButton = document.getElementById("addButton");

// Event when clicked
addButton.addEventListener("click", esExceptuada);

//Function
function esExceptuada() {
  let input = document.getElementById("submit").value;
  for (let i = 0; i < excepciones.length; i++)
    if (input === excepciones[i]) {
      const newDiv = document.createElement("div"); //creates div element
      newDiv.classList.add("div-styled"); // styles div
      const text = document.createTextNode("exceptuada"); // creates text
      newDiv.appendChild(text); // inserts text en div
      document.body.appendChild(newDiv); // inserts div in DOM
      break;
    }
  for (let x = 0; lista.length; i++)
    if (input === lista[0] || input === lista[1]) {
      const newDiv2 = document.createElement("div");
      newDiv2.classList.add("div-styled2"); // styles div
      const text = document.createTextNode("opcional");
      newDiv2.appendChild(text);
      document.body.appendChild(newDiv2);
    }
}

/*function laClaveSecreta (clave){
let nuevaClave = clave.reverse ();
nuevaClave = nuevaClave.filter (i => i !== "*");
return nuevaClave.join ('');
}
*/
