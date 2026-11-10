// Componente reutilizável: recebe tudo o que exibe via props.
const formatarPreco = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="card">
      <img className="card__imagem" src={imagem} alt={nome} loading="lazy" />
      <div className="card__corpo">
        <h3 className="card__nome">{nome}</h3>
        <p className="card__descricao">{descricao}</p>
        <p className="card__preco">{formatarPreco(preco)}</p>
      </div>
    </article>
  );
}
