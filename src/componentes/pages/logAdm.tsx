import React, { useState, ChangeEvent, FormEvent } from 'react';
import Cabecalho from '../cabecalho';

const LogAdm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setUsername('');
    setPassword('');
  };

  return (
    <div>
        <div>
            <Cabecalho/>
        </div>
        
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Usuário:</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            />
        </div>
        <div>
            <label htmlFor="password">Senha:</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            />
        </div>
        <button type="submit">Entrar</button>
        </form>
    </div>
  );
};

export default LogAdm;