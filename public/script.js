const catalogo = [
  {
    id: 1,
    titulo: "Tropa de Elite",
    tipo: "filme",
    ano: 2007,
    generos: ["acao", "drama", "policial"],
    nota: 8.9,
    assistido: true
  },
  {
    id: 2,
    titulo: "Round 6",
    tipo: "serie",
    ano: 2021,
    generos: ["suspense", "drama"],
    nota: 8.0,
    assistido: true
  },
  {
    id: 3,
    titulo: "O Auto da Compadecida",
    tipo: "filme",
    ano: 2000,
    generos: ["comedia", "drama"],
    nota: 9.1,
    assistido: true
  },
  {
    id: 4,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficcao cientifica", "misterio"],
    nota: 8.8,
    assistido: false
  },
  {
    id: 5,
    titulo: "Cidade de Deus",
    tipo: "filme",
    ano: 2002,
    generos: ["crime", "drama"],
    nota: 9.0,
    assistido: true
  },
  {
    id: 6,
    titulo: "Ruptura",
    tipo: "serie",
    ano: 2022,
    generos: ["ficcao cientifica", "suspense"],
    nota: 8.7,
    assistido: false
  },
  {
    id: 7,
    titulo: "Central do Brasil",
    tipo: "filme",
    ano: 1998,
    generos: ["drama"],
    nota: 8.5,
    assistido: false
  },
  {
    id: 8,
    titulo: "The Bear",
    tipo: "serie",
    ano: 2022,
    generos: ["drama", "comedia"],
    nota: 9.2,
    assistido: false
  }
];

console.log(catalogo);

console.log("Primeiro titulo:", catalogo[0].titulo);
console.log("Ano do ultimo:", catalogo[catalogo.length - 1].ano);

const terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
  console.log("2 genero do 3 item:", terceiroItem.generos[1]);
} else {
  console.log("O 3 item so tem um genero:", terceiroItem.generos[0]);
}

console.log("--- forEach ---");
catalogo.forEach(item => {
  console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")");
});

console.log("--- map ---");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

console.log("--- filter ---");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("Nao assistidos:", naoAssistidos.length);

console.log("--- find ---");
const destaque = catalogo.find(item => item.nota >= 9);
if (destaque) {
  console.log("Primeiro com nota 9 ou mais:", destaque.titulo, "-", destaque.nota);
} else {
  console.log("Nenhum item com nota 9 ou mais.");
}

console.log("--- reduce ---");
const somaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaGeral / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido === true);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Media geral:", mediaGeral.toFixed(2));
console.log("Media dos assistidos:", mediaAssistidos.toFixed(2));

console.log("--- some e every ---");
const temItemAntigo = catalogo.some(item => item.ano < 2000);
console.log("Tem item antes de 2000?", temItemAntigo);

const todosTemGenero = catalogo.every(item => item.generos.length >= 1);
console.log("Todos tem pelo menos 1 genero?", todosTemGenero);

const totalItens = catalogo.length;
const qtdFilmes = catalogo.filter(i => i.tipo === "filme").length;
const qtdSeries = catalogo.filter(i => i.tipo === "serie").length;

const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

let listaItens = "";
catalogo.forEach(item => {
  const badge = item.assistido ? "assistido" : "nao-assistido";
  const texto = item.assistido ? "assistido" : "nao assistido";
  listaItens += `<li>${item.titulo} (${item.ano}) - ${item.tipo} - nota: ${item.nota} <span class="badge ${badge}">${texto}</span></li>`;
});

let listaRanking = "";
ranking.forEach((item, idx) => {
  listaRanking += `<li>${idx + 1}. ${item.titulo} - ${item.nota}</li>`;
});

document.getElementById("output").innerHTML =
  "<h2>Resumo</h2>" +
  "<p>Total: " + totalItens + " itens</p>" +
  "<p>Filmes: " + qtdFilmes + "</p>" +
  "<p>Series: " + qtdSeries + "</p>" +
  "<p>Nao assistidos: " + naoAssistidos.length + "</p>" +
  "<p>Media geral: " + mediaGeral.toFixed(2) + "</p>" +
  "<p>Media dos assistidos: " + mediaAssistidos.toFixed(2) + "</p>" +
  "<h2>Top 3</h2>" +
  "<ul>" + listaRanking + "</ul>" +
  "<h2>Todos os itens</h2>" +
  "<ul>" + listaItens + "</ul>";