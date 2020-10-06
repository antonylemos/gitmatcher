import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --primary: #ef4242;
    --color-background: #F8F8FC;
    --color-input-background: #F2F0F0;
    --color-card-background: #FAFAFC;

    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    height: 100vh;
  }

  body {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  #root{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 700px){
    :root{
      font-size: 67%;
    }
  }
`;
