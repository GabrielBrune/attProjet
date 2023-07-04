import React, { useState, ChangeEvent, FormEvent } from 'react';
import Cabecalho from '../cabecalho';

const LogAdm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

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