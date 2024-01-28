function Q1ans() {
    if (document.getElementById("answer").value == "オメデトウ") {
        alert("正解");
    } else {
        alert("回答を間違えています。");
    }
}

const main = document.getElementById("dot");
var dotmap = [];
var temp = [];
var trC;
var posi = [16, 32];
var stringID = document.getElementById("string");
var time = 0;

for (var i = 0; i < 32; i++) {
    main.innerHTML += `<tr id="tr` + i + `"></tr>`;
    trC = document.getElementById("tr" + i);
    for (var j = 0; j < 64; j++) {
        trC.innerHTML += `<td style="background-color: rgb(0, 159, 106);" id=map` + i + `,` + j + `></td>`;
        temp.push(document.getElementById("map" + i + "," + j));
    }
    dotmap.push(temp);
    temp = [];
}

for (var i = 0; i < 32; i++) {
    for (var j = 0; j < 64; j++) {
        if (((j == 11 || j == 52) && i > 12 && i < 20)) {
            document.getElementById("map" + i + "," + j).style.backgroundColor = "rgb(10,10,230)";
        } else if ((i < 2 || j < 3 || i > 29 || j > 60)
            || (i < 23 && i > 19 && j < 53 && j > 10)
            || (i < 13 && i > 9 && j < 53 && j > 10)) {
            document.getElementById("map" + i + "," + j).style.backgroundColor = "rgb(20,20,20)";
        } else if (i == posi[0] && j == posi[1] + 1) {
            document.getElementById("map" + i + "," + j).style.backgroundColor = "rgb(0, 120, 106)";
        } else if (i == posi[0] && j == posi[1]) {
            document.getElementById("map" + i + "," + j).style.backgroundColor = "brown";
        }
    }
}

var rand = [];
var rac;

function count() {

    rand = [0, 0];
    time++;

    if (time % 7 == 6) {
        while (document.getElementById("map" + rand[0] + "," + rand[1]).style.backgroundColor == "rgb(20, 20, 20)"
            || document.getElementById("map" + rand[0] + "," + rand[1]).style.backgroundColor == "yellow") {
            rand = [Random.Integer(31), Random.Integer(63)];
        }
        document.getElementById("map" + rand[0] + "," + rand[1]).style.backgroundColor = rac;
        if (rand[0] == 16 && rand[1] == 33) {
            document.getElementById("map16,33").style.backgroundColor = "yellow";
        }
    }

    if(time>=1200000){
        rac = "yellow";
    }else{
        rac="rgb(10, 10, 230)"
    }
    setTimeout("count()", 1000);
}

let Random = {
    /**
     * 整数乱数生成
     * 
     * @param {number} max 最大値（最小値は0で規定） 
     * @returns {number} 生成された乱数
     */
    Integer: (max) => {
        return Math.floor(Math.random() * (max + 1));
    },
    /**
     * 一定間の整数乱数生成
     * 
     * @param {number} from 最小値
     * @param {number} to 最大値
     * @returns {number} 生成された乱数
     */
    BetweenInteger: (from, to) => {
        return Random.Integer(to - from) + from;
    }
}


document.addEventListener('keydown', function (e) {
    if (e.code == 'KeyW' || e.code == 'ArrowUp') {
        if (document.getElementById("map" + (posi[0] - 1) + "," + posi[1]).style.backgroundColor == "yellow") {
            document.getElementById("answer").value = "オメデトウ";
        }
        if (document.getElementById("map" + (posi[0] - 1) + "," + posi[1]).style.backgroundColor == 'rgb(0, 159, 106)'
            || document.getElementById("map" + (posi[0] - 1) + "," + posi[1]).style.backgroundColor == "rgb(10, 10, 230)"
            || document.getElementById("map" + (posi[0] - 1) + "," + posi[1]).style.backgroundColor == "yellow"
            || (posi[0]>1&&posi[0]<8&&posi[1]==62)
            || (posi[0]==1&&posi[1]==61)
            || (posi[0]==1&&posi[1]==51)) {
            document.getElementById("map" + posi[0] + "," + posi[1]).style.backgroundColor = "rgb(0, 159, 106)";
            document.getElementById("map" + (posi[0] - 1) + "," + posi[1]).style.backgroundColor = "brown";
            posi[0]--;
        }
    } else if (e.code == 'KeyS' || e.code == 'ArrowDown') {
        if (document.getElementById("map" + (posi[0] + 1) + "," + posi[1]).style.backgroundColor == "yellow") {
            document.getElementById("answer").value = "オメデトウ";
        }
        if (document.getElementById("map" + (posi[0] + 1) + "," + posi[1]).style.backgroundColor == 'rgb(0, 159, 106)'
            || document.getElementById("map" + (posi[0] + 1) + "," + posi[1]).style.backgroundColor == "rgb(10, 10, 230)"
            || document.getElementById("map" + (posi[0] + 1) + "," + posi[1]).style.backgroundColor == "yellow"
            || (posi[0]==0&&posi[1]==56)) {
            document.getElementById("map" + posi[0] + "," + posi[1]).style.backgroundColor = "rgb(0, 159, 106)";
            document.getElementById("map" + (posi[0] + 1) + "," + posi[1]).style.backgroundColor = "brown";
            posi[0]++;
        }
    } else if (e.code == 'KeyA' || e.code == 'ArrowLeft') {
        if (document.getElementById("map" + posi[0] + "," + (posi[1] - 1)).style.backgroundColor == "yellow") {
            document.getElementById("answer").value = "オメデトウ";
        }
        if (document.getElementById("map" + posi[0] + "," + (posi[1] - 1)).style.backgroundColor == 'rgb(0, 159, 106)'
            || document.getElementById("map" + posi[0] + "," + (posi[1] - 1)).style.backgroundColor == "rgb(10, 10, 230)"
            || document.getElementById("map" + posi[0] + "," + (posi[1] - 1)).style.backgroundColor == "yellow"
            || (posi[0]==1&&posi[1]==62)
            || (posi[0]==0&&posi[1]<62&&posi[1]>56)
            || (posi[0]==1&&posi[1]<57&&posi[1]>51)) {
            document.getElementById("map" + posi[0] + "," + posi[1]).style.backgroundColor = "rgb(0, 159, 106)";
            document.getElementById("map" + posi[0] + "," + (posi[1] - 1)).style.backgroundColor = "brown";
            posi[1]--;
        }
    } else if (e.code == 'KeyD' || e.code == 'ArrowRight') {
        if (document.getElementById("map" + posi[0] + "," + (posi[1] + 1)).style.backgroundColor == "yellow") {
            document.getElementById("answer").value = "オメデトウ";
        }
        if (document.getElementById("map" + posi[0] + "," + (posi[1] + 1)).style.backgroundColor == 'rgb(0, 159, 106)'
            || document.getElementById("map" + posi[0] + "," + (posi[1] + 1)).style.backgroundColor == 'rgb(10, 10, 230)'
            || document.getElementById("map" + posi[0] + "," + (posi[1] + 1)).style.backgroundColor == 'yellow'
            || (posi[0]==7&&posi[1]>59&&posi[1]<62)
            || (posi[0]==0&&posi[1]>50&&posi[1]<53)) {
            document.getElementById("map" + posi[0] + "," + posi[1]).style.backgroundColor = "rgb(0, 159, 106)";
            document.getElementById("map" + posi[0] + "," + (posi[1] + 1)).style.backgroundColor = "brown";
            posi[1]++;
        }else if(posi[0]==0&&posi[1]==53){
            document.getElementById("map" + posi[0] + "," + (posi[1] + 1)).style.backgroundColor = "yellow";
        }
    }
});

count();