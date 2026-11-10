import { useEffect, useState } from "react";
import ListaProdutos from "../components/ListaProdutos.jsx";
import FormularioProduto from "../components/FormularioProduto.jsx";
import { buscarProdutos, IMAGEM_PADRAO } from "../data/produtos.js";

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Roda uma vez, quando a página aparece (array de dependências vazio)
  useEffect(() => {
    let ativo = true;

    buscarProdutos().then((lista) => {
      if (ativo) {
        setProdutos(lista);
        setCarregando(false);
      }
    });

    // Limpeza: se o componente sair da tela antes, não atualiza o state
    return () => {
      ativo = false;
    };
  }, []);

  function adicionarProduto(novo) {
    const produto = {
      ...novo,
      id: Date.now(),
      imagem: novo.imagem || IMAGEM_PADRAO,
    };
    // Nunca altere o array direto: crie um novo com o produto no início
    setProdutos((anteriores) => [produto, ...anteriores]);
  }

  return (
    <div className="catalogo">
      <section className="catalogo__lista" aria-live="polite">
        <h2 className="secao__titulo">
          Produtos {!carregando && <small>({produtos.length})</small>}
        </h2>
        {carregando ? (
          <p className="aviso aviso--carregando">Carregando...</p>
        ) : (
          <ListaProdutos produtos={produtos} />
        )}
      </section>

      <aside className="catalogo__formulario">
        <FormularioProduto onAdicionar={adicionarProduto} />
      </aside>
    </div>
  );
}
