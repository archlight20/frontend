function creategoals (){
    // createing elements 
    const newdiv = document.createElement("div");
    const newpara = document.createElement("p");
    const newbutton= document.createElement("button");
    // assiging class and ids 
    newdiv.classList.add("marginclass");
    newdiv.id = "resutdes";
    newbutton.id = "deletebutton";
    // pushing p and button inside div  
    newdiv.appendChild(newpara) ;
    newdiv.appendChild(newbutton) ;

    console.log(newdiv);

    document.body.appendChild(newdiv);
    

}

const clickmebutton = document.getElementById("clickmebutton");

clickmebutton.addEventListener("click", creategoals);
