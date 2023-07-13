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

  const handleEnter = () => {
  
  }

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
                  <h2>Acesso restrito</h2>
                  <input className='Adm'
                  type="text"
                  id="username"
                  placeholder='Usuario'
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  />

                  <input  className='Adm2'
                  type="password"
                  id="password"
                  placeholder='Senha'
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  />
              </div >
              <button className='buttonEnter' onClick={handleEnter}><a href='http://localhost:3000/'>ENTRAR</a></button>
              </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default LogAdm;