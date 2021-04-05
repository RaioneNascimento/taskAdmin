import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import InputMask from 'react-input-mask';
import api from '../../services/api';

import configureStore from '../../store';
import './styles.css'

const { store, persistor } = configureStore();

export default function ShowTasks() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dataEntrega, setDataEntrega] = useState('');
  const [dataConclusao, setDataConclusao] = useState('');

  const history = useHistory();

  // const userId = localStorage.getItem('userId')
  const userId = store.getState().form.userState.idValue;
  
  console.log(handleEditTask(this.value));
  async function handleEditTask(e) {
    e.preventDefault();

    const data = {
      name,
      description,
      dataEntrega,
      dataConclusao
    };

    try {
      await api.put('tasks', data, {
        headers: {
          Authorization: userId,
        }
      })
      history.push('/profile');
    } catch (err) {
      alert('Erro ao alterar tarefa, tente novamente.')
    }
  }
  

  return (
    <div className="edit-tasks-container">
     <div className="content">
      <section>
        <h1>Atualize sua Tarefa</h1>
        <p>Descreva a tarefa detalhadamente para tornar seu dia mais produtivo.</p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#24292e"/>
          Voltar para Home
        </Link>
      </section>
      <form>
        <input 
          placeholder="Nome da tarefa"
          required
          // value={}      
          onChange={e => setName(e.target.value)}
        />
        <textarea 
          required
          placeholder="Descrição da tarefa"
          // value={}        
          onChange={e => setDescription(e.target.value)}
        />

        <div className="input-group">
          <InputMask
            required
            mask="99/99/9999"
            placeholder="Data de Entrega"
            // value={}        
            onChange={e => setDataEntrega(e.target.value)}
          />

          <InputMask 
            required
            mask="99/99/9999"
            placeholder="Data de Conclusão"
            // value={}        
            onChange={e => setDataConclusao(e.target.value)}
          />
        </div>

        <button className="button" type="submit">Salvar</button>
      </form>
     </div>
   </div>
  );
}