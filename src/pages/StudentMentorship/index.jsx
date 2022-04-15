import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

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

// import api from '../../services/api';


export default function StudentMentorship() {
  return (
    <Container>
      <Content>
        <Greetings>
          <h3>Olá, Fulano de tal! </h3>
          <p>Consulte seus agendamentos!</p>
        </Greetings>

        <SeparationLine />

        <ListOfMentorships>
          <MentorshipItem>
            <MentorAvatar>
              <img src={avatar} alt="foto do mentor" />
            </MentorAvatar>

            <MentorshipInfo>
              <p className='nome-mentor'>Nome do mentor</p>
              <p className='especialidade'>Especialidades</p>
              <p className='horario'>Data e hora</p>
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
        </ListOfMentorships>

        
      </Content>
    </Container>
  );
}
