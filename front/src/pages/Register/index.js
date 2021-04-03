import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Formik, Field, Form } from 'formik';
import InputMask from 'react-input-mask';
import { validate } from 'gerador-validador-cpf'

import api from '../../services/api';

import './styles.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');

  const history = useHistory();
  
  async function handlerRegister() {
    // e.preventDefault();
    const data = {
      name,
      email,
      senha,
      cpf,
      dataNascimento,
      cep,
      endereco,
      numero,
    };     

    try {
      const response = await api.post('users', data)

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }
  }
    
  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
      });
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma com sua ID e gerencie suas tarefas.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#24292e" />
            Voltar
          </Link>
        </section>

        <Formik
          onSubmit={handlerRegister}
          validateOnMount
          initialValues={{
            cep: '',
            logradouro: '',
          }}

          render={({ isValid, setFieldValue, field }) => (
            <Form>
              <div className="form-contro-group">
                <Field
                  required
                  placeholder="Nome e Sobrenome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <Field
                  required
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Field
                  required
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />
              </div>
              <div className="input-group">
                <InputMask
                  required
                  type="text"
                  mask="999.999.999-99"
                  placeholder="CPF"
                  onBlur={e => validate(e.target.value) ? console.log('CPF válido') : alert('CPF inválido, insira um CPF Válido.')}
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                />
                <InputMask
                  required
                  mask="99/99/9999"
                  style={{ width: 230 }}
                  placeholder="Data de Nascimento"
                  value={dataNascimento}
                  onChange={e => setDataNascimento(e.target.value)}
                />
              </div>
              <div className="input-group">
                <InputMask
                  required
                  mask="99999-999"
                  name="cep"
                  type="text"
                  placeholder="CEP"
                  value={cep}
                  onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                  onChange={e => setCep(e.target.value)}
                />
              </div>

              <div className="input-group">
                <Field
                  required
                  name="logradouro"
                  type="text"
                  placeholder="Logradouro"
                  onChange={e => setEndereco(e.target.value)}
                />
                <Field
                  required
                  type="number"
                  placeholder="N°"
                  value={numero}
                  style={{ width: 150 }}
                  onChange={e => setNumero(e.target.value)}
                />
              </div>
              <button type="submit" disabled={!isValid} className="button">Cadastrar</button>
            </Form>
          )}
        />
      </div>
    </div>
  );
}

export default Register;