// Criar corações espalhados aleatoriamente
function espalharCoracoes() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // posição aleatória
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.left = Math.random() * 100 + "vw";

        // tamanho aleatório
        heart.style.fontSize = (Math.random() * 25 + 20) + "px";

        // velocidade aleatória do pulsar
        heart.style.animationDuration = (Math.random() * 2 + 1.3) + "s";

        document.body.appendChild(heart);
    }
}

espalharCoracoes();

// Função para abrir o presente
function abrirPresente() {
    document.querySelector(".gift-box").style.display = "none";
    document.getElementById("foto-container").style.display = "block";
}
