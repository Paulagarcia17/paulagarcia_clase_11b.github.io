let carne
let pescado
let verdura

//let menu= ["carne" , "pescado" , "verdura"];
let bebida= ["VinoTinto","VinoBlanco","Agua"]

let menu = "carne"
switch (menu) {
    case "carne" : 
        console.log ("VinoTinto")
        break;
    case "pescado":
        console.log ("VinoBlanco")
        break;
    case "verdura":
        console.log ("Agua")
        break;
    default:
        console.log ("Elija carne, pescado o verdura")
        break;

}

let Menu= ["carne" , "pescado" , "verdura"];
for (let i= 0; i < Menu.length ; i++) {
    let textoFinal = Menu [0] + "Vino Tinto";
    console.log (textoFinal)
    let textoFinal1 = Menu [1] + "Vino Blanco";
    console.log (textoFinal1)
    let textoFinal2 = Menu [2] + "Agua";
    console.log (textoFinal2)
}
    
let vuelta= 11 

while (vuelta > 0 ) { 
    console.log ( "Vuelta" + vuelta)
    vuelta= vuelta - 1;
}