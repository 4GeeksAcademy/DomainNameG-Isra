const pronoun = ["the", "our", "your", "my", "his", "her"];
const adj = [
  "great",
  "big",
  "fantastic",
  "amazing",
  "wonderful",
  "awesome",
  "brilliant",
  "marvelous",
  "spectacular"
];
const noun = [
  "jogger",
  "raccoon",
  "garden",
  "cat",
  "dog",
  "friend",
  "dream",
  "journey",
  "planet"
];
const extension = [".com", ".es", ".net", ".org", ".tech"];

let dominio = "";
let lista = document.querySelector("#myListDomine");

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        dominio = pronoun[i] + adj[j] + noun[k] + extension[l];

        let newDomine = document.createElement("li");
        newDomine.textContent = dominio;
        lista.appendChild(newDomine);
      }
    }
  }
}

// Ocultar los dominios después del 50 inicial
for (let i = 50; i < lista.children.length; i++) {
  lista.children[i].style.display = "none";
}

// Función para cargar más dominios
document.querySelector("#cargar").addEventListener("click", function () {
  let dominiosMostrados = document.querySelectorAll(
    "#myListDomine li:not([style='display: none;'])"
  ).length;
  for (
    let i = dominiosMostrados;
    i < dominiosMostrados + 50 && i < lista.children.length;
    i++
  ) {
    lista.children[i].style.display = "block";
  }
});

// Función para reiniciar la lista de dominios
document.querySelector("#reset").addEventListener("click", function () {
  for (let i = 0; i < lista.children.length; i++) {
    lista.children[i].style.display = "none";
  }
});
