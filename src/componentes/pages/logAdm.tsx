import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import Cabecalho from '../cabecalho';

const LogAdm = () => {
  const navigator = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEnter = async () => {
    let json = await api.logadm(username, password);
    
    if(json.userId){
      alert('Bem vindo' + '\n' + username );
      navigator('/');
    }else{
      alert('Usuario ou senha nao encontrado');
    }

  }

  return (
    <div>
        <div>
            <Cabecalho/>
        </div>
          <div className='background-Log'>
            <div className='box-conteiner-log'>
              <div>              
              <div className='paddinglog'>
                  <h2>Acesso restrito</h2>
                  <input className='Adm'
                  type="text"
                  id="username"
                  placeholder='Usuário'
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
                  <button className='buttonEnter' onClick={handleEnter}>ENTRAR</button>              
              </div >
            </div>
            </div>
        </div>
    </div>
  );
};

export default LogAdm;