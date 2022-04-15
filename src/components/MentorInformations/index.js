import React, { useEffect, useState } from 'react';

import * as S from './styles';

import api from '../../services/api'

export default function MentorInformations() {
    const [mentor, setMentor] = useState([]);
    const [nomeAluno, setNomeAluno] = useState('');
    const [emailAluno, setEmailAluno] = useState('');
    const [idHorario, setIdHorario] = useState('');
    

      // Lista mentor por id
    useEffect(() => {
        const id = localStorage.getItem('id_mentor');

        api.get(`/mentores/${id}`)
        .then(response => {
            setMentor(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

    // Cadastra o agendamento da mentoria
    function handleSubmit(e) {
        e.preventDefault();

        api.post(`/email/send/${idHorario}`, {
            "toAluno": emailAluno,
            "nameAluno": nomeAluno,
            "withAttachment": true
        }).then((response) => {
            alert('Mentoria agendada com sucesso. Por favor verifique seu E-mail!')
        }).catch((err => {
            alert('Infelizmente não foi possível realizar seu agendamento. Por favor tente novamente mais tarde!')
            console.log(err)
        }))
    }


    return (
        <>
            <S.Container>
                <S.MentorDetail>
                    <img src={mentor.linkImage}></img>
                    <h3>{mentor.nome}</h3>
                    <p>Cargo (Em breve...)</p>
                    <p className='presentation'>Sabe muito sobre:</p>
                    <div className='tasks'>
                        {
                            mentor.especialidades?.map((especialidade) => (
                                <div key={especialidade} className='item-tasks'>
                                    {especialidade}    
                                </div>
                            ))
                        }
                    </div>
                </S.MentorDetail>

                <S.MentorTimer>
                    <div className='timer'>
                        <div className='hour'>
                            <label htmlFor='hour-select'>Horários disponíveis:</label>

                            {!mentor.agendamentos || mentor.agendamentos?.length < 1
                                ?
                                    <div style={{
                                        width: 'auto', height: '40px', backgroundColor: '#FEBBA2',
                                        fontSize: '0.8rem', padding: '13px 17px', borderRadius: '0.2rem'
                                    }}>
                                        Lamento. Não possuo horário no momento :/
                                    </div>
                                :
                                <select
                                    name="hour-select"
                                    id="hour-select"
                                    form="mentor-hour"
                                    className='select-hour'
                                    value={idHorario}
                                    onChange={(e) => setIdHorario(e.target.value)}
                                    >

                                    {
                                        mentor.agendamentos?.map((agendamento) => (
                                            <option key={agendamento.id} value={agendamento.id}>
                                                {agendamento.status === true && agendamento.data}   
                                            </option>
                                        ))
                                    }
                                </select>
                            }       
                        </div>

                        <form id="mentor-hour">
                            <label htmlFor='name'>Nome:</label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                value={nomeAluno}
                                onChange={(e) => setNomeAluno(e.target.value)}
                            />

                            <label htmlFor='email'>Email:</label>
                            <input 
                                type="text"
                                id="email"
                                name="email"
                                value={emailAluno}
                                onChange={(e) => setEmailAluno(e.target.value)}
                            />

                            <button className='submit' onClick={handleSubmit}>Marcar mentoria</button>
                        </form>
                    </div>
                </S.MentorTimer>
            </S.Container>
        </>
    );
}