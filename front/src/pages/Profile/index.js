import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit2, FiCheck } from 'react-icons/fi';

import configureStore from '../../store';
import api from '../../services/api';

import './styles.css';

const { store, persistor } = configureStore();

export default function Profile() {
  const [tasks, setTasks] = useState([]);

  const history = useHistory();
  const userId = store.getState().form.userState.idValue;
  const userName = store.getState().form.userState.nameValue;

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setTasks(response.data);
    });

  }, [userId]);

  async function handleCompleteTask(id) {
    if (window.confirm('Deseja finalizar a tarefa?') === true) {
      await api.delete(`tasks/${id}`, {
        headers: {
          Authorization: userId,
        }
      });
      setTasks(tasks.filter(task => task.id !== id)); 
        alert('Tarefa finalizada com sucesso.')
      return true;
    } 
  }

  // async function handleEditTask(id, nome, description, dataEntrega, dataConclusao) {
  //   if (window.confirm('Deseja alterar a tarefa?') === true) {
  //     await api.put(`tasks/${id}`, {
  //       headers: {
  //         Authorization: userId,
  //       }
  //     });

  //     console.log(handleEditTask(task.nome))
      
  //     setTasks(tasks.filter(task => task.id !== id)); 
  //     setTasks(tasks.filter(task => task.nome !== nome)); 
  //     setTasks(tasks.filter(task => task.description !== description)); 
  //     setTasks(tasks.filter(task => task.dataEntrega !== dataEntrega)); 
  //     setTasks(tasks.filter(task => task.dataConclusao !== dataConclusao)); 
  //       alert('Tarefa alterar com sucesso.');
  //     return true;
  //   } else {
  //       alert('Erro ao deletada tarefa.')
  //   }
  // }

  async function handleDeleteTask(id) {
    if (window.confirm('Deseja deletar a tarefa?') === true) {
      await api.delete(`tasks/${id}`, {
        headers: {
          Authorization: userId,
        }
      });
      setTasks(tasks.filter(task => task.id !== id)); 
        alert('Tarefa deletada com sucesso.')
      return true;
    } else {
        alert('Erro ao deletada tarefa.')
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <span>Olá, {userName}!</span>

        <Link id="button-task" className="button" to="/tasks/new">
          Criar Tarefa
        </Link>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#24292e"/>
        </button>
      </header>

      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>NOME:</strong>
            <p>{task.name}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{task.description}</p>

            <strong>DATA ENTREGA:</strong>
            <p>{task.dataEntrega}</p>

            <strong>DATA CONCLUSÃO:</strong>
            <p>{task.dataConclusao}</p>

            <div className="buttons-container">
              <button onClick={() => handleCompleteTask(task.id)} type="button">
                <FiCheck size={20} color="#28a745" />
              </button>

              <button type="button">
                <FiEdit2 size={20} color="#007bff" />
              </button>

              <button onClick={() => handleDeleteTask(task.id)} type="button">
                <FiTrash2 size={20} color="#dc3545" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}