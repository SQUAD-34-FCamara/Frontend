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
    max-width: 400px;
    max-width: 80%;
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
;

export const Greetings = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 0;

  h3 {
    color: #040303;
    margin-bottom: 8px;
  }

  div {
   
    label {
      font-size: 0.8rem;
      line-height: 1rem;
      font-weight: 500;
      color: #242424;
    }

    div {
      display: flex;
      align-items: center;
      input {
        width: 160px;
        height: 32px;
        border: none;
        border-radius: 6px;
        background-color: #fafafa;
        margin-top: 6px;
        margin-right: 4px;
        padding: 0 10px;
      }

      button {
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 6px;
        background-color: #fe4400;
        margin-top: 6px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: filter 0.3s;

        svg {
          font-size: 24px;
        }

        &:hover {
          filter: brightness(0.8)
        }
      }
    }
    
  }


  @media(min-width: 768px) {
    width: 80%;

    h3 {
      font-size: 1.6rem;
      margin-bottom: 4px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      label {
        font-size: 0.9rem;
        margin-right: 24px;
      }

      div {
        display: flex;
        align-items: center;

        input {
          height: 40px;
          width: 200px;
          margin-right: 6px;
        }

        button {
          width: 40px;
          height: 40px;

          svg {
            font-size: 28px;
          }
        }
      }
    }
  }

  @media(min-width: 1024px) {
    width: 80%;

    h3 {
      font-size: 2rem;
      margin-bottom: 8px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      label {
        font-size: 1.1rem;
        margin-right: 0;
      }

      div {
        input {
          height: 40px;
          width: 280px;
          margin-right: 8px;
        }
      }
    }
  }

  @media(min-width: 1440px) {
    width: 80%;

    h3 {
      font-size: 2.2rem;
    }

    div {
      label {
        font-size: 1.2rem;
      }
    }
  }
`;

export const ListOfMentorships = styled.div`
  width: 90%;

  @media(min-width: 768px) {
    width: 80%;
    margin-top: 12px;
  }

  @media(min-width: 1440px) {
    margin-top: 16px;
  }
`;

export const MentorshipItem = styled.div`
  width: 100%;
  height: 72px;
  border-radius: 10px;
  box-shadow: 0 0 2px 0 #fafafa;
  background-color: #fafafa;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;

  & + div {
    margin-top: 8px;
  }

  @media(min-width: 425px) {
    height: 80px;
    justify-content: flex-start;

    & + div {
      margin-top: 10px;
    }
  }

  @media(min-width: 768px) {
    height: 96px;

    & + div {
      margin-top: 12px;
    }
  }

  @media(min-width: 1024px) {
    height: 120px;
   
    & + div {
      margin-top: 14px;
    }
  }

  @media(min-width: 1440px) {
    height: 132px;

      & + div {
      margin-top: 16px;
    }
  }
`;

export const MentorAvatar = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid #989898;
    object-fit: cover;
  }

  @media(min-width: 425px) {
    width: 25%;

    img {
      width: 60px;
      height: 60px;
    }
  }

  @media(min-width: 768px) {
    width: 18%;
    justify-content: center;

    img {
      width: 72px;
      height: 72px;
    }
  }

  @media(min-width: 1024px) {
    width: 20%;

    img {
      width: 88px;
      height: 88px;
    }
  }

  @media(min-width: 1440px) {
    img {
      width: 96px;
      height: 96px;
    }
  }
`;

export const MentorshipInfo = styled.div`
  width: 55%;

  p:first-child {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 2px;
  }

  p:nth-child(2) {
    font-size: 0.7rem;
    font-weight: 500;
    margin-bottom: 6px;
  }

  p:last-child {
    font-size: 0.8rem;
    font-weight: 600;
  }

  @media(min-width: 425px) {
    width: 64%;

    p:first-child {
      font-size: 1rem;
      margin-bottom: 0;
    }

    p:last-child {
      font-size: 0.9rem;
    }
  }

  @media(min-width: 768px) {
    margin-left: 8px;

    p:first-child {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p:nth-child(2) {
      font-size: 0.8rem;
      margin-bottom: 8px;
    }

    p:last-child {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  @media(min-width: 1024px) {
    margin-left: 0;

    p:first-child {
      font-size: 1.4rem;
    }

    p:nth-child(2) {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    p:last-child {
      font-size: 1.2rem;
    }
  }

  @media(min-width: 1440px) {
    p:first-child {
      font-size: 1.6rem;
    }

    p:nth-child(2) {
      font-size: 1.1rem;
      margin-bottom: 12px;
    }

    p:last-child {
      font-size: 1.4rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditButton = styled.button`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    background-color: transparent;

    transition: background-color 0.2s;
    transition: border 0.2s;
  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: #cbc7c7;
    border: 1px solid #fe4400;

    svg {
      color: #fafafa;
    }
  }

  @media(min-width: 425px) {
    width: 32px;
    height: 32px;

    svg {
      font-size: 22px;
    }
  }

  @media(min-width: 768px) {
    margin-left: 16px;
    width: 36px;
    height: 36px;

    svg {
      font-size: 28px;
    }
  }

  @media(min-width: 1024px) {
    margin-left: 20px;
    width: 40px;
    height: 40px;

    svg {
      font-size: 32px;
    }
  }

  @media(min-width: 1440px) {
    margin-left: 24px;
    width: 44px;
    height: 44px;

    svg {
      font-size: 36px;
    }
  }
`;

export const CancelButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background-color: transparent;

  transition: background-color 0.2s;
  transition: border 0.2s;

  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: #cbc7c7;
    border: 1px solid #fe4400;

    svg {
      color: #fafafa;
    }
  }

  @media(min-width: 425px) {
    width: 32px;
    height: 32px;

    svg {
      font-size: 22px;
    }
  }

  @media(min-width: 768px) {
    margin-left: 8px;
    width: 36px;
    height: 36px;

    svg {
      font-size: 28px;
    }
  }

  @media(min-width: 1024px) {
    margin-left: 10px;
    width: 40px;
    height: 40px;

    svg {
      font-size: 32px;
    }
  }

  @media(min-width: 1440px) {
    margin-left: 12px;
    width: 44px;
    height: 44px;

    svg {
      font-size: 36px;
    }
  }  

`;
