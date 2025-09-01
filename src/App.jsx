// import { useState } from "react";

// function App() {
//   const [produtos, setProdutos] = useState([
//     { nome: "Arroz", marcado: false },
//     { nome: "Alga", marcado: false },
//     { nome: "Shoyu", marcado: false },
//     { nome: "Vinagre de Arroz", marcado: false },
//     { nome: "Gergelim", marcado: false },
//     { nome: "Molho de Pimenta", marcado: false },
//     { nome: "Salmão", marcado: false },
//     { nome: "Polpa de Salmão", marcado: false },
//     { nome: "Pele", marcado: false },
//     { nome: "Wasabi", marcado: false },
//     { nome: "Rondashi", marcado: false },
//     { nome: "Embalagem 04", marcado: false },
//     { nome: "Embalagem 03", marcado: false },
//     { nome: "Embalagem para Temaki", marcado: false },
//     { nome: "Saco de Lixo", marcado: false },
//   ]);

//   const toggleProduto = (index) => {
//     const novosProdutos = [...produtos];
//     novosProdutos[index].marcado = !novosProdutos[index].marcado;
//     setProdutos(novosProdutos);
//   };

//   return (
//     <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
//       <h1>Lista de Fornecedores</h1>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {produtos.map((produto, index) => (
//           <li key={index} style={{ marginBottom: "10px" }}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={produto.marcado}
//                 onChange={() => toggleProduto(index)}
//               />
//               <span
//                 style={{
//                   marginLeft: "8px",
//                   textDecoration: produto.marcado ? "line-through" : "none",
//                 }}
//               >
//                 {produto.nome}
//               </span>
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const [produtos, setProdutos] = useState(() => {
    const saved = localStorage.getItem("produtos");
    return saved ? JSON.parse(saved) : [
      { id: 1, nome: "Arroz", pedido: false },
      { id: 2, nome: "Alga Nori", pedido: false },
      { id: 3, nome: "Shoyu", pedido: false },
      { id: 4, nome: "Vinagre de Arroz", pedido: false },
      { id: 5, nome: "Gergelim", pedido: false },
      { id: 6, nome: "Molho de Pimenta", pedido: false },
      { id: 7, nome: "Salmão", pedido: false },
      { id: 8, nome: "Polpa de Salmão", pedido: false },
      { id: 9, nome: "Pele de Salmão", pedido: false },
      { id: 10, nome: "Wasabi", pedido: false },
      { id: 11, nome: "Rondashi", pedido: false },
      { id: 12, nome: "Embalagem 04", pedido: false },
      { id: 13, nome: "Embalagem 03", pedido: false },
      { id: 14, nome: "Embalagem p/ Temaki", pedido: false },
      { id: 15, nome: "Saco de Lixo", pedido: false }
    ];
  });

  const [novoProduto, setNovoProduto] = useState("");

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  function togglePedido(id) {
    setProdutos(produtos.map(p => p.id === id ? { ...p, pedido: !p.pedido } : p));
  }

  function removerProduto(id) {
    setProdutos(produtos.filter(p => p.id !== id));
  }

  function adicionarProduto(e) {
    e.preventDefault();
    if (!novoProduto.trim()) return;
    setProdutos([...produtos, { id: Date.now(), nome: novoProduto, pedido: false }]);
    setNovoProduto("");
  }

  return (
    <div className="container">
      <h1>📦 Lista de Fornecedores</h1>
      <form onSubmit={adicionarProduto} className="form">
        <input
          type="text"
          placeholder="Novo produto..."
          value={novoProduto}
          onChange={(e) => setNovoProduto(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="lista">
        {produtos.map(p => (
          <li key={p.id} className="item">
            <span onClick={() => togglePedido(p.id)} className={p.pedido ? 'marcado' : ''}>{p.nome}</span>
            <button onClick={() => removerProduto(p.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}