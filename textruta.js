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
        else if(e.key == 'Enter'){
            console.log(spanContent);
        }
        else if(e.key == 'Backspace'){
            if(spanContent.length != 0){
                spanContent = spanContent.substring(0, spanContent.length - 1);
            }
            else{
                if(text.lastIndexOf("</span>") + 7 == text.length && text.lastIndexOf("</span>") != -1){
                    text = text.substring(0, text.length - 7);
                    remove = text.lastIndexOf("<span>");
                    let saveText = text.substring(remove + 6, text.length - 1);
                    if (text.lastIndexOf("<span id='röd'>") > remove){
                        remove = text.lastIndexOf("<span id='röd'>");
                        saveText = text.substring(remove + 15, text.length - 1);
                    }
                    else{
                        saveText = text.substring(remove + 6, text.length - 1);
                    }
                    text = text.substring(0, remove);
                    spanContent = saveText;
                }
                else{
                    text = text.substring(0, text.length - 1);
                }
            }
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
        }
        textruta.innerHTML = text + spanContent;
    };
});
