const body = document.getElementsByTagName("body")[0];
function load() {
  for (let i = 0; i < 40; i++) {
    let div = document.createElement("div");
    div.classList.add("petala");
    let left = Random(100, 25);
    div.style.left = `${left}%`;

    let leftStart = Random(100, 75);
    let leftMid = Random(100, 0);
    let leftEnd = Random(0, -40);
    let TopMid = Random(85, 40);
    let TopEnd = Random(140, 10);
    let rotation = Random(90, -90)
 // Nome único para a animação
    let animName = `queda${i}`;

    // Cria keyframes únicos para cada pétala
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes ${animName} {
        0% { top: -20%; left: ${leftStart}%; }
        50% { top: ${TopMid}%; left: ${leftMid}%; transform: rotateZ(${rotation}deg) skew(-26deg); }
        100% { top: ${TopEnd}%; left: ${leftEnd}%;transform: rotateZ(0) skew(-26deg); }
      }
    `, styleSheet.cssRules.length);

    div.style.animationName = animName;

    let duracao = Random(20, 5);
    div.style.animationDuration = `${duracao}s`;
    // Delay aleatório para começar a animação
    let delay = Random(5,0);
    div.style.animationDelay = `${delay}s`;

    body.appendChild(div);
  }
}
setTimeout(load(), 15000);

function Random(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
