// biblia.js
const versoes = {
  ACF: {
    "Salmos": [
      {
        capitulo: 23,
        versiculos: [
          "O Senhor é o meu pastor, nada me faltará.",
          "Em verdes pastos me faz repousar...",
          "Ainda que eu ande pelo vale da sombra da morte..."
        ]
      }
    ],
    "João": [
      {
        capitulo: 3,
        versiculos: [
          "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito..."
        ]
      }
    ]
  },
  NVI: {
    "Salmos": [
      {
        capitulo: 23,
        versiculos: [
          "O Senhor é o meu pastor; nada me faltará.",
          "Ele me faz repousar em verdes pastagens...",
          "Mesmo quando eu andar pelo vale da sombra da morte..."
        ]
      }
    ],
    "João": [
      {
        capitulo: 3,
        versiculos: [
          "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito..."
        ]
      }
    ]
  }
};
let versaoAtual = "ACF";

function mudarVersao(v) {
  versaoAtual = v;
  // Recarrega o capítulo com a nova versão
  carregarCapitulo(livroAtual, capituloAtual);
}

function carregarCapitulo(livro, cap) {
  const capitulo = versoes[versaoAtual][livro]?.find(c => c.capitulo === cap);
  if (!capitulo) {
    document.getElementById("titulo").textContent = "Não encontrado";
    return;
  }

  document.getElementById("titulo").textContent = `${livro} ${cap}`;

  const versiculosDiv = document.getElementById("versiculos");
  versiculosDiv.innerHTML = "";

  capitulo.versiculos.forEach((texto, i) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${i+1}</strong> ${texto}`;
    versiculosDiv.appendChild(p);
  });
}
