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

import avatar from '../../assets/avatar.jpeg';

export default function ListaMentor() {
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
          <select>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
            <option value="Full-stack">Full-stack</option>
          </select>
        </FilterArea>

        <SeparationLine />

        <MentorListTitle>
          <h4>Conheça nossas feras:</h4>
        </MentorListTitle>
        <MentorList>
          <MentorListItem>
            <AvatarMentor>
              <img src={avatar} alt="Foto do rosto do(a) mentor(a)" />
            </AvatarMentor>

            <MentorInformation>
              <MentorName>Fulano de tal</MentorName>
              <MentorSpecialty>Especialidade tal</MentorSpecialty>
            </MentorInformation>

            <MentorProfileButtonIcon>
              <ImArrowRight2 />
            </MentorProfileButtonIcon>

            <MentorProfileButton>
              Ver Perfil
            </MentorProfileButton>

          </MentorListItem>

          <MentorListItem>
            <AvatarMentor>
              <img src={avatar} alt="Foto do rosto do(a) mentor(a)" />
            </AvatarMentor>

            <MentorInformation>
              <MentorName>Fulano de tal</MentorName>
              <MentorSpecialty>Especialidade tal</MentorSpecialty>
            </MentorInformation>

            <MentorProfileButtonIcon>
              <ImArrowRight2 />
            </MentorProfileButtonIcon>

            <MentorProfileButton>
              Ver Perfil
            </MentorProfileButton>

          </MentorListItem>
          

          <MentorListItem>
            <AvatarMentor>
              <img src={avatar} alt="Foto do rosto do(a) mentor(a)" />
            </AvatarMentor>

            <MentorInformation>
              <MentorName>Fulano de tal</MentorName>
              <MentorSpecialty>Especialidade tal</MentorSpecialty>
            </MentorInformation>

            <MentorProfileButtonIcon>
              <ImArrowRight2 />
            </MentorProfileButtonIcon>

            <MentorProfileButton>
              Ver Perfil
            </MentorProfileButton>
          </MentorListItem>

        </MentorList>
      </Content>
    </Container>
  );
}
