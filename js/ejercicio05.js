/*document.getElementsByTagName("h3")[0].addEventListener("click", (e)=>{
    let a = document.getElementsByTagName("h2")[0].innerHTML;
    let b =  document.getElementsByTagName("ul")[0].value;
    let c = `Has elegido ${e.target.id} que se imparte en turno de ${a}
    Los nº de grupos que se imparten son 3: ${b}`;
    let d = document.createElement("div").appendChild("p").appendChild(c);
});
document.getElementsByTagName("h3")[1].addEventListener("click", (e)=>{
    let a = document.getElementsByTagName("h2")[0];
    let b =  document.getElementsByTagName("ul")[1];
    let c = `Has elegido ${e.target.id} que se imparte en turno de ${a}
    Los nº de grupos que se imparten son 3: ${b}`;
    document.createElement("div").appendChild(c);
});
document.getElementsByTagName("h3")[2].addEventListener("click", (e)=>{
    let a = document.getElementsByTagName("h2")[1];
    let b =  document.getElementsByTagName("ul")[2];
    let c = `Has elegido ${e.target.id} que se imparte en turno de ${a}
    Los nº de grupos que se imparten son 3: ${b}`;
    document.createElement("div").appendChild(c);
});
document.getElementsByTagName("h3")[3].addEventListener("click", (e)=>{
    let a = document.getElementsByTagName("h2")[1];
    let b =  document.getElementsByTagName("ul")[3];
    let c = `Has elegido ${e.target.id} que se imparte en turno de ${a}
    Los nº de grupos que se imparten son 3: ${b}`;
    document.createElement("div").appendChild(c); 
});*/

const h3 = document.getElementsByTagName("h3");
const h2 = document.getElementsByTagName("h2");
const ul =  document.getElementsByTagName("ul");
const create = document.createElement("div");


/*for(let i=0;i<h3.length;i++){
    h3[i].addEventListener("click",(e)=>{
        let texto = `Has elegido ${e.target.innerHTML} que se imparte en turno de mañana. Los nº de grupos que se imparten son 3: SMRDUAL, SMR1 y SMR2`;
          p = document.createTextNode(texto);
          create.appendChild(p);

          let inser = document.getElementsByTagName("lista")[3];
          let bod = document.body.insertBefore(create,inser);
          document.body.onload = bod;
    });
}*/

function espaciado(e){
    let mensaje =  new String(e).split(";");
    alert(mensaje);
    let mensajes = "";
    for(let i=0;i<=mensaje.length;i++){
        if(mensaje[i].replace(","," ").trim() != "&nbsp"){
            mensajes += mensaje[i];
        }
    }
    alert(mensaje);
    
}

document.getElementsByTagName("h3")[0].addEventListener("click", espaciado("&nbsp;&nbsp;tal;"));
