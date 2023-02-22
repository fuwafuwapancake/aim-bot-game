// HTMLから canvas要素を取得する
const resultDivided = document.getElementById('result-area');
const canvas = document.getElementById('canvas');

// canvasのサイズをウィンドウ一杯に広げる
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

// canvas要素を2D(2次元)で扱う環境を取得する
const ctx = canvas.getContext('2d');

let positionX = 0;
let positionY = 0;
let radius = 25;

// 円を描く関数
function drawCircle() {
    // Math.random() は 0~1 の間の数値になる。 例: Math.random() = 0.545615443
    // Math.random() * 10 で 0 ~ 10 の間の数値になる。 例： Math.random() * 10 = 5.45615443
    // Math.floor(数値) で小数点以下を四捨五入する 例： Math.floor(5.45615443) = 5
    // ランダムな数値を取得して、それをキャンバスの範囲内の座標に変換している。
    positionX = Math.floor(Math.random() * canvas.width);
    positionY = Math.floor(Math.random() * canvas.height);
    // 10〜20の間の整数を取得している。
    radius = Math.floor(Math.random() * 10) + 20;

    // 描き始めの関数
    ctx.beginPath();

    // 円を描く
    ctx.arc(positionX, positionY, radius, 0, Math.PI * 2, true);

    // RGBの色要素をランダムで決定
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // 塗りつぶし色の設定
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

    // 円を塗りつぶす
    ctx.fill();
    // 円弧を描く
    ctx.stroke();
}


if (confirm('スタートをするならば何かのキーを押してください。')) {
    const start = performance.now();

    // 最初の円を描く
    // 実行時間を計測した処理

    drawCircle();
    let score = 0;
    document.body.onmousedown = (ev) => {
        // 円の中心位置とマウスが押された位置との差を計算する。
        const xd = ev.x - positionX;
        const yd = ev.y - positionY;

        // xの差の二乗とyの差の二乗を足したものが、半径（radius）の二乗よりも小さければ、円の内側をクリックしたことがわかる。
        const hit = (xd * xd + yd * yd) <= radius * radius;
        if (hit) {
            // 領域をクリア
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 新しい円を描く
            drawCircle();
            score = score + 1;
        } else {
            console.log("miss");
        }

        if (score === 20) {
            const end = performance.now();
            let count = end - start

            confirm("20回倒しました");
            document.getElementById('result').innerText = ' ';
            document.createElement('p');
            const kekka = document.createElement('p');
            document.getElementById('result').appendChild(kekka);
            count = count / 1000
            if (count < 10) {
                document.write(count + '秒でした。' + 'あなたは' + 'S+ランク'.fontsize(7).fontcolor("gold"));
            } else if (count < 20) {
                document.write(count + '秒でした。' + 'あなたは' + 'Sランク'.fontsize(7).fontcolor("fuchsia"));
            } else if (count < 30) {
                document.write(count + '秒でした。' + 'あなたは' + 'Aランク'.fontsize(7).fontcolor("silver"));

            } else if (count < 35) {
                document.write(count + '秒でした。' + 'あなたは' + 'Bランク'.fontsize(7).fontcolor("olive"));

            } else if (count < 40) {
                document.write(count + '秒でした。' + 'あなたは' + 'Cランク'.fontsize(7).fontcolor("aqua"));
            } else
                document.write(count + '秒でした。' + 'あなたは' + 'Dランク'.fontsize(7).fontcolor("red"));

        }

    }
}






