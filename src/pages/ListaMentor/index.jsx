import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ImArrowRight2 } from 'react-icons/im';

import {
  Container,
  Content,
  MentorListInstructions,
  FilterArea,
  SeparationLine,
  MentorListTitle,
  MentorList,
  MentorListItem,
  AvatarMentor,
  MentorInformation,
  MentorName,
  MentorSpecialty,
  MentorProfileButtonIcon,
  MentorProfileButton
} from './styles';

import api from '../../services/api';


export default function ListaMentor() {
  const [mentors, setMentors] = useState([]);
  const [especialidade, setEspecialidade] = useState('');

  // Array especialidades
  const especialidadesFiltro = [
    {value: 'TODOS', name: "Todas"},
    {value: "FRONTEND", name: "Front-end"},
    {value: "BACKEND", name: "Back-end"},
    {value: "MOBILE", name: "Mobile"},
    {value: "DATASCIENCE", name: "Data Science"},
    {value: "MACHINELEARNING", name: "Machine Learning"},
    {value: "BIGDATA", name: "Big Data"},
    {value: "DEVOPS", name: "DevOps"},
    {value: "CLOUD", name: "Cloud"},
    {value: "BLOCKCHAIN", name: "Blockchain"},
    {value: "DESIGN", name: "Design"},
  ];

  // Lista todos os mentores
  useEffect(() => {
    api.get('/mentores')
      .then(response => {
        setMentors(response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  // Executa função handleListBySpecialty sempre que o estado "especialidade for alterado"
  useEffect(() => {
    handleListBySpecialty()
  }, [especialidade])

  // Função para chamar o endpoint de acordo com a especialidade contida no estado
  function handleListBySpecialty() {
    if(especialidade !== "TODOS" && !!especialidade) {
      api.get(`/mentores?especialidade=${especialidade}`)
      .then(response => {
        setMentors(response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
    } else {
      api.get('/mentores')
      .then(response => {
        setMentors(response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

   // Seta especialidade no estado
  function handleSelectChange(e) {
    e.preventDefault();
    setEspecialidade(e.target.value)
  }


  return (
    <Container>
      <Content>
        <MentorListInstructions>
          <h2>Encontre seu mentor...</h2>
          <p><b>1.</b> Filtre por especialidade!</p>
          <p><b>2.</b> Clique em 'VerPerfil' e agende um dia e horário!</p>
          <p><b>3.</b> Tire suas dúvidas e cresça na sua carreira!</p>
        </MentorListInstructions>

        <FilterArea>
          <label>Qual especialidade você procura?</label>
          <select
            value={especialidade}
            onChange={handleSelectChange}
          >
            {
              especialidadesFiltro.map(especialidadeFiltro =>(
                <option value={especialidadeFiltro.value} key={especialidadeFiltro.value}>
                  {especialidadeFiltro.name}
                </option>
              ))
            }
          </select>
        </FilterArea>

        <SeparationLine />

        <MentorListTitle>
          <h4>Conheça nossas feras:</h4>
        </MentorListTitle>
        <MentorList>
          
            {
              mentors.map((mentor) => {
                const separaNome = mentor?.nome.split(' ', 2)
                const primeiroNome = separaNome[0]

                return (
                  <MentorListItem key={mentor?.id}>
                    <AvatarMentor>
                      <img src={mentor?.linkImage} alt="Foto do rosto do(a) mentor(a)" />
                    </AvatarMentor>

                    <MentorInformation>
                      <MentorName>{primeiroNome}</MentorName>
                      <MentorSpecialty>
                        {especialidade === "TODOS" || !especialidade
                          ? 
                            mentor?.especialidades.length > 1 
                              ?
                                mentor?.especialidades[0] + '...'
                              :
                                mentor?.especialidades[0]
                          : 
                            especialidade
                        }
                      </MentorSpecialty>
                    </MentorInformation>

                    <MentorProfileButtonIcon
                       key={mentor?.id}
                       onClick={() => localStorage.setItem("id_mentor", mentor?.id)}
                     >
                       <Link to="/mentor">
                        <ImArrowRight2 />
                      </Link>
                    </MentorProfileButtonIcon>

                    <MentorProfileButton
                      key={mentor?.id}
                      onClick={() => localStorage.setItem("id_mentor", mentor?.id)}
                    >
                      <Link to="/mentor">Ver Perfil</Link>
                    </MentorProfileButton>
                  </MentorListItem>
                )
              }
            ) 
          }
        </MentorList>
      </Content>
    </Container>
  );
}
