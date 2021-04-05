import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import InputMask from 'react-input-mask';


import api from '../../services/api';
import configureStore from '../../store';
import './styles.css'

const { store, persistor } = configureStore();

export default function NewTasks() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');
  const [dataConclusao, setDataConclusao] = useState('');

  const history = useHistory();

  // const userId = localStorage.getItem('userId')
  const userId = store.getState().form.userState.idValue;

  async function handlerNewTask(e) {
    e.preventDefault();

    const data = {
      name,
      description,
      dataEntrega,
      dataConclusao
    };

    try {
      await api.post('tasks', data, {
        headers: {
          Authorization: userId,
        }
      })

      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar tarefa, tente novamente.')
    }
  }


  return (
    <div className="new-tasks-container">
     <div className="content">
      <section>
        <h1>Cadastre sua Tarefa</h1>
        <p>Descreva a tarefa detalhadamente para tornar seu dia mais produtivo.</p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#24292e"/>
          Voltar para Home
        </Link>
      </section>
      <form onSubmit={handlerNewTask}>
        <input 
          placeholder="Nome da tarefa"
          required
          value={name}        
          onChange={e => setName(e.target.value)}
        />
        <textarea 
          required
          placeholder="Descrição da tarefa"
          value={description}        
          onChange={e => setDescription(e.target.value)}
        />

        <div className="input-group">
          <InputMask
            required
            mask="99/99/9999"
            placeholder="Data de Entrega"
            value={dataEntrega}        
            onChange={e => setDataEntrega(e.target.value)}
          />

          <InputMask 
            required
            mask="99/99/9999"
            placeholder="Data de Conclusão"
            value={dataConclusao}        
            onChange={e => setDataConclusao(e.target.value)}
          />
        </div>

        <button className="button" type="submit">Inserir</button>
      </form>
     </div>
   </div>
  );
}