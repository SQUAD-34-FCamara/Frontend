import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete, AiOutlineSearch } from 'react-icons/ai';

import {
  Container,
  Content,
  SeparationLine,
  Greetings,
  ListOfMentorships,
  MentorshipItem,
  MentorAvatar,
  MentorshipInfo,
  Buttons,
  EditButton,
  CancelButton
} from './styles';

import avatar from '../../assets/foto-teste.jpg';

import api from '../../services/api';
import { useEffect, useState } from 'react';


export default function StudentMentorship() {
  const [emailAluno, setEmailAluno] = useState('');
  const [mentorias, setMentorias] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();

    api.get(`/alunos/${emailAluno}`)
    .then((response) => {
        setMentorias(response.data)
        console.log(response.data)
    }).catch((err => {
        console.log(err)
    }))
}

  return (
    <Container>
      <Content>
        <Greetings>
          <h3>Olá, Aluno! </h3>
          
          <div>
            <label htmlFor='email'>
              Digite seu e-mail e <br />
              consulte seus agendamentos!
            </label>
            <div>
            <input
              placeholder='Digite seu e-mail'
              type="text"
              id="email"
              value={emailAluno}
              onChange={(e) => setEmailAluno(e.target.value)}
            />
            <button onClick={handleSubmit}>
              <AiOutlineSearch />
            </button>
            </div>
          </div>

        </Greetings>

        <SeparationLine />

        <ListOfMentorships>
          {
            mentorias?.map(mentoria => (
              <MentorshipItem>
                <MentorAvatar>
                  <img src={mentoria?.agendamentosAluno[0]?.mentor?.linkImage} alt="foto do mentor" />
                </MentorAvatar>

                <MentorshipInfo>
                  <p className='nome-mentor'>{mentoria?.agendamentosAluno[0]?.mentor?.nome}</p>
                  <p className='especialidade'>{mentoria?.agendamentosAluno[0]?.mentor?.especialidades}</p>
                  <p className='horario'>{mentoria?.agendamentosAluno[0]?.data}</p>
                </MentorshipInfo>

                <Buttons>
                  <EditButton>
                    <BiEditAlt />
                    {/* Editar */}
                  </EditButton>
                  <CancelButton>
                    <AiOutlineDelete />
                    {/* Cancelar */}
                  </CancelButton>
                </Buttons>
              </MentorshipItem>
            ))
          }
          
        </ListOfMentorships>

        
      </Content>
    </Container>
  );
}
