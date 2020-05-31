import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    })
    .catch(err => console.log(err));
  }, []);

  async function handleAddRepository() {
    const newRepository = {
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
