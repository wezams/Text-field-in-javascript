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
        else if(e.key == 'q' || e.key == 'w' || e.key == 'e' || e.key == 'r' || e.key == 't' || e.key == 'y' || e.key == 'u' || e.key == 'i' || e.key == 'o' || e.key == 'p' || e.key == 'å' || e.key == 'a' || e.key == 's' || e.key == 'd' || e.key == 'f' || e.key == 'g' || e.key == 'h' || e.key == 'j' || e.key == 'k' || e.key == 'l' || e.key == 'ö' || e.key == 'ä' || e.key == 'z' || e.key == 'x' || e.key == 'c' || e.key == 'v' || e.key == 'b' || e.key == 'n' || e.key == 'm' || e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' || e.key == '0' || e.key == '!' || e.key == '?' || e.key == ',' || e.key == '.'){
            spanContent = spanContent + e.key;
        }
        if(e.key == ' '){
            if(spacePos == text.length - 1){
                spacePos = text.length;
                console.log(spacePos);
            }
            else{
                if(spanContent.trim().toLowerCase() != "röd"){
                    console.log(spanContent.substring(1, spanContent.length))
                    if(spanContent.lastIndexOf(' ') != -1){
                        text = text + " <span>" + spanContent.substring(1, spanContent.length) + "</span>";
                    }
                    else{
                        text = text + "<span>" + spanContent + "</span>";
                    }
                }
                else{
                    if(spanContent.lastIndexOf(' ') != -1){
                        text = text + " <span id='röd'>" + spanContent.substring(1, spanContent.length) + "</span>";
                    }
                    else{
                        text = text + "<span id='röd'>" + spanContent + "</span>"
                    }
                }
                spanContent = " ";
            }
        }
        textruta.innerHTML = text + spanContent;
    };
});
