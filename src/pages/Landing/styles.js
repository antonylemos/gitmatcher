import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-right: 1.3rem;
  padding-left: 1.3rem;

  ${props => props.start && css`
    main {
      flex: 1;
      transition: flex 0.5s;
    }

    @media(max-width: 560px) {
      header{
        margin-top: 5rem;
        flex: none;
      }

      main {
        transition: none;
        justify-content: center;
      }
    }
  `}

  @media(max-width: 1000px) {
    width: 80vw;
  }

  .Toastify__toast--error{
    font: 400 1.3rem Roboto;
    background: var(--primary) !important;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  flex: 1;

  @media(max-width: 1000px) {
    width: 80vw;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3.0rem;

  margin-bottom: 0.8rem;

  > h1 {
    color: var(--primary);
    font-weight: 300;

    padding-left: 0.3rem;
  }

  @media(max-width: 400px) {
    font-size: 2.3rem;
  }
`;

export const Github = styled.div`
  display: flex;
  font-weight: 900;
  padding-right: 0.3rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 300;

  text-align: center;

  margin-bottom: 4rem;
`;

export const Form = styled.form`
  ${props => props.hide && css`
    visibility: hidden;
    opacity: 0;
    transition-property: all;
    transition-duration:  0.49s;
    transition-timing-function: linear;
    transition-delay: 1.0s;

    @media(max-width: 560px) {
      display: none;
    }
  `}
`;

export const SearchBox = styled.div`
  width: 800px;

  display: flex;
  justify-content: center;

  border-radius: 0.8rem;
  transition:  box-shadow 0.5s;

  &:hover, &:focus-within {
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  }

  input {
    width: 100%;
    height: 5.5rem;

    font-size: 1.6rem;
    color: black;

    text-align: center;

    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;

    border: 0;
    outline: 0;
  }

  button {
    width: 9.0rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;
    text-align: center;

    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    border: 0;
    color: white;

    background-color: var(--color-input-background);
    transition: background 0.4s;

    &:hover {
      background-color: var(--primary);

      img {
        display: none;
      }

      p {
        display: block;
      }
    }

    p {
      display: none;
    }
  }

  @media(max-width: 1000px) {
    width: 80vw;
  }
`;

export const Wrapper = styled.main`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Users = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child, header:first-child {
    margin-right: 1rem;
  }

  &:last-child, header:last-child {
    margin-left: 1rem;
  }

  @media(min-width: 800px) {
    width: 800px;

    &:first-child {
    margin-right: 4rem;
  }

  &:last-child {
    margin-left: 4rem;
  }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font: 300 1.4rem Roboto;
  border-top: 3px solid var(--color-input-background);

  p {
    a {
      color: var(--primary);
      font: 400 1.4rem Roboto;
      text-decoration: none;
      transition: color 0.3s;

      padding-left: 0.4rem;

      &:hover {
        color: black;
      }
    }
  }

  @media(max-width: 560px) {
    justify-content: center;
  }
`;
