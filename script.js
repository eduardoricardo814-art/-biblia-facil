// Versículos do dia (aleatório)
const versiculos = [
  "O Senhor é o meu pastor; nada me faltará. — Salmo 23:1",
  "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito. — João 3:16",
  "Confia no Senhor de todo o teu coração. — Provérbios 3:5",
  "Tudo posso naquele que me fortalece. — Filipenses 4:13",
  "A paz deixo-vos, a minha paz vos dou. — João 14:27"
];

// Mostra um versículo aleatório
function versiculoDoDia() {
  const indice = Math.floor(Math.random() * versiculos.length);
  document.getElementById("versiculo").textContent = versiculos[indice];
}

// Modo escuro
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Compartilhar no WhatsApp
function compartilhar() {
  const texto = document.getElementById("versiculo").textContent;
  const url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(texto);
  window.open(url, "_blank");
}
