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

for(let i=0;i<h3.length;i++){
    h3[i].addEventListener("click",(e)=>{
            alert(e.target.value);
    });
    //let crear = document.createElement("div");
    //crear.appendChild();
}