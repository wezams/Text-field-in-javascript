let textruta = null;
let text = "";
spacePos = 0;
spanContent = "";
document.addEventListener("DOMContentLoaded", function(){
    textruta = document.getElementById("textruta");
    document.onkeydown = function(e){
        if(e.key == 'Alt'){
            console.log(text);
        }
        else{
            spanContent = spanContent + e.key;
        }
        if(e.key == ' '){
            if(spacePos == text.length - 1){
                spacePos = text.length;
                console.log(spacePos);
            }
            else{
                spacePos = text.length;
                if(spanContent != "röd "){
                    text = text + "<span>" + spanContent + "</span>";
                }
                else{
                    text = text + "<span id='röd'>" + spanContent + "</span>"
                }
                spanContent = "";
            }
            //text = text + " ";
        }
        textruta.innerHTML = text + spanContent;
    };
});
