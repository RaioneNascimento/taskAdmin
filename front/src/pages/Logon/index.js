import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import configureStore from '../../store';

import api from '../../services/api';

import './styles.css';

const { store, persistor } = configureStore();

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory('');

  async function handlerLogin(e) {
    e.preventDefault();
    
    try {
      const response = await api.post('sessions', { id });
      const data = { id, name: response.data.name }

      store.dispatch({type: 'UPDATE_ID_VALUE', data});

      history.push('/profile')
    } catch (err) {
      alert('Falha no login, insira sua ID e tente novamente ;)');
    }
  }

  return (
    
    <div className="logon-container">
        <Link className="back-link" to="/register">
          Sign up
        </Link>
      <div className="content">
        <section className="form">

          <form onSubmit={handlerLogin}>
            <h1>Faça seu logon</h1>
            <input 
              placeholder="Sua ID" 
              value={id}
              onChange={e => setId(e.target.value)}
            />

            <button className="button" type="submit">Entrar</button>
          </form>
        </section>
      </div>
    </div>
  );
}