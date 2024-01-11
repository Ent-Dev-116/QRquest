let params = new URLSearchParams(document.location.search);
var url = Number(params.get("id"));
const text = ["7", "番", "目", "サ", "イ", "ト", , "の", "右", "下"];
const id = document.getElementById('p_content');

if (url < 1 || url > 10) {
    window.close();
} else {
    if (url != 7) {
        id.textContent = text[url - 1];
    }else{
        document.getElementById("button").style.backgroundColor="blue";
    }
}

function click(){
    if(url==7){
        
    }
}