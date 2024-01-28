function Q1ans() {
    if (document.getElementById("answer1").value == "ハチマングウ"
    &&document.getElementById("answer2").value == "アオモリケン"
    &&document.getElementById("answer3").value == "ユメノハジマリ"
    &&document.getElementById("answer4").value == "オメデトウ"
    &&document.getElementById("answer5").value == "トキハカネナリ"
    &&document.getElementById("answer6").value == "サン") {
        ("https://ent-dev-116.github.io/QRquest/correct.html");
    } else {
        alert("残念。");
    }
}