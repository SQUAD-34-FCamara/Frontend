import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: #cbc7c7;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fe4400;
  opacity: 0.8;
  overflow: auto;

  @media (min-width: 425px) {
    margin: 0 auto; 
  }

  @media (min-width: 768px) {
    max-width: 700px;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
  }

  @media (min-width: 1440px) {
    max-width: 1100px;
  }
`;

export const MentorListInstructions = styled.div`
  width: 90%;
  margin-bottom: 16px;

  h2 {
    font-size: 1.5rem;
    margin: 8px 0 12px;
    color: #cbc7c7;
  }

  p {
    font-size: 0.8rem;
    line-height: 1rem;
    font-weight: 500;
    color: #040403;
    font-weight: 500;
    opacity: 0.9;

    & + p {
      margin-top: 4px;
    }
  }

  @media (min-width: 768px) {
    width: 80%;

    h2 {
      font-size: 1.6rem;
      font-weight: 700;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1024px) {
    padding: 16px 0 8px 0;
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1440px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const FilterArea = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 6px;
    color: #040303;
  }

  select {
    width: 236px;
    height: 24px;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    width: 80%;

    label {
      font-size: 1.1rem;
    }

    label {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1024px) {
    label {
      font-size: 1.2rem;
    }

    select {
      width: 304px;
      height: 32px;
      font-size: 1.1rem
    }
  }

  @media (min-width: 1440px) {
    margin-bottom: 20px;

    label {
      font-size: 1.4rem;
    }

    select {
      width: 328px;
      height: 40px;
      font-size: 1.4rem
    }
  }
`;

export const SeparationLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #989898;
  opacity: 0.5;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    height: 1.5px
  }

  @media (min-width: 1440px) {
    height: 2px;
    margin-bottom: 18px;
  }
`;

export const MentorListTitle = styled.div`
  width: 90%;
  margin-bottom: 16px;

  h4 {
    color: #040303;
    font-weight: 600;
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    width: 80%;

    h4 {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    width: 80%;

    h4 {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    width: 80%;

    h4 {
      font-size: 1.6rem;
      margin-bottom: 18px;
    }
  }
`;

export const MentorList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0 0 16px 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 80%;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    width: 80%;
  }
`;

export const MentorListItem = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0 0 2px 0 #fafafa;
  background-color: #fafafa;

  display: flex;
  align-items: center;
  padding: 4px 8px;

  & + div {
    margin-top: 10px;
  }

  position: relative;

  @media (min-width: 768px) {
    width: 272px;
    height: 280px;
    padding: 6px 16px;
    margin-bottom: 8px;

    flex-direction: column;

    & + div {
      margin-top: 0;
    }
  }

  @media (min-width: 1024px) {
    width: 232px;
  }

  @media (min-width: 1440px) {
    width: 260px;
    height: 300px;
  }
`;

export const AvatarMentor = styled.div`
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #989898;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;

    img {
      width: 96px;
      height: 96px;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;

    img {
      width: 112px;
      height: 112px;
    }
  }

  @media (min-width: 1440px) {
    width: 100%;
    height: 100%;

    img {
      width: 120px;
      height: 120px;
    }
  }
`;

export const MentorInformation = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 4px 0 20px;

  @media (min-width: 768px) {
    width: 100%;
    padding: 0;
    align-items: center;
    justify-content: flex-start;
  } 
`;

export const MentorName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.5rem;
  }
`;

export const MentorSpecialty = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.1rem;
  }
`;


export const MentorProfileButtonIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  right: 16px;
  border: 0;
  box-shadow: 0 0 3px 0 #fe4400;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s;
  

  &:hover {
    background-color: #fe4400;

    svg {
      color: #fafafa;
      opacity: 1;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    color: #fe4400;
    font-weight: 700;
    
    transition: color 0.3s;
    transition: opacity 0.3s;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;


export const MentorProfileButton = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    position: absolute;
    right: calc(50% - 80px);
    bottom: 32px;

    width: 160px;
    height: 36px;
    border-radius: 6px;

    border: 0;
    box-shadow: 0 0 3px 0 #fe4400;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.1rem;
    color: #fe4400;
    font-weight: 600;
    transition: background-color 0.3s;
    transition: color 0.3s;

    &:hover {
      background-color: #fe4400;
      color: #fafafa;
    }
  }

  @media (min-width: 1024px) {
    bottom: 24px;
  }

  @media (min-width: 1440px) {
    height: 40px;
  }
`;