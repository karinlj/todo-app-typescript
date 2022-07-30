import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto";
    color: white;
    background-color: #272e3d;
    min-height: 100vh;
  }
  ul {
    list-style: none;
    margin: 0;
    margin-top: 2rem;
    padding: 0;
  }
  form {
    margin-bottom: 2rem;
    @media all and (max-width: 480px) {
     margin-bottom: 4rem;
    }
  }
  label {
    font-size: 0.9rem;
    color: #aec2ee;
  } 
  main {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1rem;

  }
`;
