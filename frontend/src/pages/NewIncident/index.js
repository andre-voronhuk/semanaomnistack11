import React, { useState }from 'react';
import './styles.css';

import logoImg from '../../assets/logo.svg';

import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';


export default function NewIncident(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [value,setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

  async  function handleNewincident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }
    try {
          await  api.post('incidents', data,{
              headers:{
                  authorization: ongId,
              }
          })
          history.push('/profile');
    } catch (error) {
        alert("erro ao cadastrar caso, tente novament")
        
    }
    
  }
    return(
        
        <div className="new-incident-container">

            <div className="content">
                <section>

                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar o herói para resolver isso.</p>

                <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color="#E02041"/>
                            
                         
                                Voltar para Home
                                
                        </Link>
                </section>

                    <form onSubmit={handleNewincident}>
                        <input 
                            placeholder="Título do Caso" 
                            value={title}
                            onChange={e=> setTitle(e.target.value)}
                        />
                        <textarea  
                            placeholder="Descrição"
                            value={description}
                            onChange={e=> setDescription(e.target.value)}
                        />    
                        <input 
                            placeholder="Valor (R$)"
                            value={value}
                            onChange={e=> setValue(e.target.value)}

                        />
 
                       <button className="button" type="submit">Cadastar</button>
                    </form>
            </div>
        </div>
        
    );
}