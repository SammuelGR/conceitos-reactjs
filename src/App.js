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
    const response = await api.post('/repositories', {
      title: 'Novo repo',
      url: 'https://www.github.com/sammuelgr/aircnc',
      techs: ['React Native', 'Node.js']
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`/repositories/${id}`);

    console.log(response.data);

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
