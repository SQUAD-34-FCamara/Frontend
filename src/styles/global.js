import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
    ::root{
        --background: #FFFFFF
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //para o valor de REM se adaptar ao tamanho da tela

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }
    


`