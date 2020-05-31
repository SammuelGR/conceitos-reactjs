import React, { useState } from "react";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState(['Repositório 1', 'Repositório 2']); 

  async function handleAddRepository() {
    const newRepository = 'Novo repositório';

    setRepositories([...repositories, newRepository]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        { repositories.map(repo => (
          <li key={repo}>
          {repo}
          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
        )) }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
