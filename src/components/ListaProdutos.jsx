import ProdutoCard from "./ProdutoCard.jsx";

export default function ListaProdutos({ produtos }) {
  if (produtos.length === 0) {
    return <p className="aviso">Nenhum produto cadastrado ainda.</p>;
  }

  return (
    <div className="grade">
      {/* .map() transforma cada objeto do array em um <ProdutoCard /> */}
      {produtos.map((produto) => (
        <ProdutoCard
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          descricao={produto.descricao}
        />
      ))}
    </div>
  );
}
