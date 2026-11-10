// Dados "mockados": simulam o que viria de uma API.
export const produtosIniciais = [
  {
    id: 1,
    nome: "Cesta de morangos orgânicos",
    preco: 24.9,
    imagem: "https://picsum.photos/id/1080/600/400",
    descricao: "500 g de morangos frescos, colhidos no dia e sem agrotóxicos.",
  },
  {
    id: 2,
    nome: "Câmera fotográfica retrô",
    preco: 599.0,
    imagem: "https://picsum.photos/id/250/600/400",
    descricao: "Câmera analógica de 35 mm, revisada e pronta para uso.",
  },
  {
    id: 3,
    nome: "Relógio de parede vintage",
    preco: 189.5,
    imagem: "https://picsum.photos/id/175/600/400",
    descricao: "Mostrador de 30 cm, ponteiros silenciosos e moldura de metal.",
  },
  {
    id: 4,
    nome: "Livro: clássicos da literatura",
    preco: 39.9,
    imagem: "https://picsum.photos/id/24/600/400",
    descricao: "Edição de capa dura com cinco romances clássicos em português.",
  },
];

// Imagem usada quando o produto é cadastrado sem imagem
export const IMAGEM_PADRAO = "https://picsum.photos/id/180/600/400";

// Simula uma requisição: devolve os produtos depois de "tempo" milissegundos
export function buscarProdutos(tempo = 1500) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(produtosIniciais), tempo);
  });
}
