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
        <div className='box-conteiner-log'>
          <form onSubmit={handleSubmit}>
          <div className='paddinglog'>
              <h2>Usuário</h2>
              <input className='Adm'
              type="text"
              id="username"
              placeholder='Usuario'
              value={username}
              onChange={handleUsernameChange}
              required
              />
          </div>
          <div>
            <h2>Senha</h2>
              <input  className='Adm'
              type="password"
              id="password"
              placeholder='Senha'
              value={password}
              onChange={handlePasswordChange}
              required
              />
          </div>
          <button type="submit">Entrar</button>
          </form>
        </div>
    </div>
  );
};

export default LogAdm;