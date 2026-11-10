import Catalogo from "./pages/Catalogo.jsx";

export default function App() {
  return (
    <>
      <header className="cabecalho">
        <div className="container">
          <h1 className="cabecalho__logo">
            Vitrine<span>.</span>
          </h1>
          <p className="cabecalho__texto">Catálogo de produtos feito em React</p>
        </div>
      </header>

      <main className="container">
        <Catalogo />
      </main>

      <footer className="rodape">
        <p>Exercício do Módulo 17 · EBAC Front-End</p>
      </footer>
    </>
  );
}
