function Q1ans() {
    if (document.getElementById("answer").value == "トキハカネナリ") {
        alert("正解");
    } else {
        alert("回答を間違えています。");
    }
}

const id = document.getElementById("img")
let count = -1;
var flag = 0;

picChange(); // 関数を実行

let open = function () { window.open("https://ent-dev-116.github.io/QRquest/Q.7/Q7.html"); }

function picChange() {

    count++;

    // カウントが最大になれば配列を初期値に戻すため「0」を指定する
    if (count == 60) count = 0;

    // 画像選択

    if (count > 55) {
        id.src = "./8.png";
    } else if (count > 48) {
        id.src = "./7.png";
    } else if (count > 39) {
        id.src = "./4.png";
    } else if (count > 33) {
        id.src = "./5.png";
    } else if (count > 21) {
        id.src = "./6.png";
    } else if (count > 18) {
        id.src = "./3.png";
    } else if (count > 17) {
        id.src = "./9.png";
    } else if (count > 7) {
        id.src = "./2.png";
    } else {
        id.src = "./1.png";
    }

    if (count == 17) {
        id.addEventListener("click", open);
    } else if (count == 18) {
        id.removeEventListener('click', open);
    }

    // 1秒ごとに実行
    setTimeout("picChange()", 1000);

}