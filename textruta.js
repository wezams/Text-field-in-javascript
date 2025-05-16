let textruta = null;
let text = "";
document.addEventListener("DOMContentLoaded", function(){
    textruta = document.getElementById("textruta");
    document.onkeydown = function(e){
        console.log(e);
        if(e.key == ' '){
            text = text + " ";
        }
        else if(e.key == 'Alt'){
            console.log(text);
        }
        else{
            text = text + e.key;
        }
        textruta.innerText = text;
    };
});
