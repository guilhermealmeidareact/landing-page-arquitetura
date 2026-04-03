// O nosso Array de Projetos
let galeriaProjetos = [
  { 
    titulo: "Man Cave Suprema", 
    estilo: "Industrial", 
    area: 120,
    imagem: "./img/manCaveSuprema.jpg"
  },
  { 
    titulo: "Shophouse Clássica", 
    estilo: "Minimalista", 
    area: 250,
    imagem: "./img/shopHouse.jpg"
  },
  { 
    titulo: "Estúdio de Garagem",
    estilo: "Brutalista", 
    area: 85,
    imagem: "./img/estudioGaragem.jpg"
  }
];

// 1. Pegamos a caixa vazia lá do HTML usando o ID
let caixaGaleria = document.getElementById("container-da-galeria");

// 2. O Loop: vai rodar uma vez para cada projeto na nossa lista
for (let i = 0; i < galeriaProjetos.length; i++) {
  
  // Pegamos a ficha do projeto atual (começa no [0], depois [1], [2]...)
  let projetoAtual = galeriaProjetos[i];
  
  // 3. Desenhamos o HTML do card usando as crases (``)
  let cardHTML = `
    <div class="card-projeto">
      <img src="${projetoAtual.imagem}" alt="${projetoAtual.titulo}">
      <h2>${projetoAtual.titulo}</h2>
      <p>Estilo: ${projetoAtual.estilo}</p>
      <p>Área: ${projetoAtual.area}m²</p>
    </div>
  `;
  
  // 4. Injetamos o card pronto dentro da caixa principal!
  caixaGaleria.innerHTML += cardHTML; 
}