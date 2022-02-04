import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --blue-light: #6933FF;
    --blue: #5429CC;
    --green: #33CC95;
    --red: #E52E4D;
    --shape: #FFFFFF;
    --texts: #969CB2;
    --titles: #363F5F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    align-items: center;
    background-color: #363F5F7F;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .react-modal-content {
    background-color: var(--background);
    max-width: 576px;
    padding: 3rem;
    position: relative;
    width: 100%;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter .2s;

    &:hover {
      filter: brightness(.5);
    }
  }
`;
