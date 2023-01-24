document.getElementsByTagName("h3")[0].addEventListener("click", (e)=>{
    let a = document.getElementsByTagName("h2")[0].innerHTML;
    let b =  document.getElementsByTagName("ul")[0].value.innerHTML;
    let c = `Has elegido ${e.target.id} que se imparte en turno de ${a}
    Los nº de grupos que se imparten son 3: ${b}`;
    //document.createElement("footer").appendChild(c);
    alert(c)
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
});