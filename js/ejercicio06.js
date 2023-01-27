let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(e) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  let a = document.querySelector("ul");
  switch (e.target.className) {
    case "subir":
      for(let i=0;i<a.length;i++){
        if(i != 0){
          return e.target.parentNode.childNodes[--i];
        }
      }
      break;
    case "bajar":
      for(let i=0;i<a.length;i++){
        if(i != 0){
          return e.target.parentNode.childNodes[++i];
        }
      }
      break;
    case "borrar":
      e.target.parentElement.remove();
      break;
  }
 }

 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  var ocult = document.getElementById("toggleList").innerHTML;
  var list = document.getElementsByClassName("list")[0];
  if(ocult == "Ocultar lista"){
    document.getElementById("toggleList").innerHTML = "Mostrar lista";
    list.style.display = "none";
  }else{
    document.getElementById("toggleList").innerHTML = "Ocultar lista";
    list.style.display = "block";
  }
 }
 function CambiarTextoLista(){
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  let a = document.getElementsByClassName("description")[0];
  let b = document.getElementsByClassName("description")[1].value;

  return a.innerHTML = b;
 }
 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  var a = document.getElementsByClassName("addItemInput")[0].value;
  var b = document.createElement("li");
  var c = document.querySelector("ul");
  b.innerHTML = a;
  return attachListItemButtons(c.appendChild(b));
 }

 function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

