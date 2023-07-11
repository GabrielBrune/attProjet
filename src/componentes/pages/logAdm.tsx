import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
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

  const handleEnter = () => {
    if(username){
    <Link to='/'></Link>
  }}

  return (
    <div>
        <div>
            <Cabecalho/>
        </div>
          <div className='background-Log'>
            <div className='box-conteiner-log'>
              <div>
              <form>
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
              <button onClick={handleEnter}>Entrar</button>
              </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default LogAdm;