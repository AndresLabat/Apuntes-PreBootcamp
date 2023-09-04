
function change(){
    let div1 = document.getElementById("divUno");
    let div2= document.getElementsByClassName("divDos");

    if(div1.hidden == true && div2[0].hidden == false){
        div1.hidden = false;
        div2[0].hidden = true;
    } else{
        div1.hidden = true;
        div2[0].hidden = false;
    }
}