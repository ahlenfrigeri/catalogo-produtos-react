import { useState } from "react";

const formularioVazio = { nome: "", preco: "", descricao: "", imagem: "" };

// Formulário controlado: o valor de cada campo vive no state do React.
export default function FormularioProduto({ onAdicionar }) {
  const [campos, setCampos] = useState(formularioVazio);
  const [erro, setErro] = useState("");

  // Um único handler para todos os campos, usando o atributo "name"
  function handleChange(evento) {
    const { name, value } = evento.target;
    setCampos((anterior) => ({ ...anterior, [name]: value }));
  }

  function handleSubmit(evento) {
    evento.preventDefault();

    const nome = campos.nome.trim();
    const descricao = campos.descricao.trim();
    const preco = Number(campos.preco.replace(",", "."));

    if (!nome || !descricao || !campos.preco) {
      setErro("Preencha nome, preço e descrição.");
      return;
    }
    if (Number.isNaN(preco) || preco <= 0) {
      setErro("Informe um preço válido, maior que zero.");
      return;
    }

    onAdicionar({ nome, preco, descricao, imagem: campos.imagem.trim() });
    setCampos(formularioVazio); // limpa o formulário
    setErro("");
  }

  return (
    <form className="formulario" onSubmit={handleSubmit} noValidate>
      <h2 className="formulario__titulo">Cadastrar produto</h2>

      <label className="formulario__rotulo" htmlFor="nome">
        Nome *
      </label>
      <input
        className="formulario__campo"
        id="nome"
        name="nome"
        value={campos.nome}
        onChange={handleChange}
        required
      />

      <label className="formulario__rotulo" htmlFor="preco">
        Preço (R$) *
      </label>
      <input
        className="formulario__campo"
        id="preco"
        name="preco"
        inputMode="decimal"
        placeholder="Ex.: 99,90"
        value={campos.preco}
        onChange={handleChange}
        required
      />

      <label className="formulario__rotulo" htmlFor="descricao">
        Descrição *
      </label>
      <textarea
        className="formulario__campo"
        id="descricao"
        name="descricao"
        rows="3"
        value={campos.descricao}
        onChange={handleChange}
        required
      />

      <label className="formulario__rotulo" htmlFor="imagem">
        URL da imagem (opcional)
      </label>
      <input
        className="formulario__campo"
        id="imagem"
        name="imagem"
        type="url"
        placeholder="https://..."
        value={campos.imagem}
        onChange={handleChange}
      />

      {erro && (
        <p className="formulario__erro" role="alert">
          {erro}
        </p>
      )}

      <button className="botao" type="submit">
        Adicionar ao catálogo
      </button>
    </form>
  );
}
