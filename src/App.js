import React, { useState } from "react";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([{
    id: '1',
    title: 'Repositório 1',
    url: 'https://www.github.com/sammuelgr/rocketshoes'
  }]); 

  async function handleAddRepository() {
    const newRepository = {
      id: Date.now(),
      title: 'Novo repo',
      url: 'https://www.github.com/sammuelgr/aircnc'
    };

    setRepositories([...repositories, newRepository]);
  }

  async function handleRemoveRepository(id) {
    setRepositories(repositories.filter(repo => repo.id !== id));
  }

  return (
    <div>
      <ul data-testid="repository-list">
        { repositories.map(repo => (
          <li key={repo.id}>
          {repo.title}
          <button onClick={() => handleRemoveRepository(repo.id)}>
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
