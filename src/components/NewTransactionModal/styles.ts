import styled from 'styled-components';

export const Container = styled.form`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */

  h2 {
    color: var(--text-title);
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    
    border: 1px solid #D7D7D7;
    background: #E7E9EE;

    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    color: #fff;
    border-radius: 0.25rem;
    
    border: 0;
    background: var(--green);

    font-weight: 600;
    font-size: 1rem;
    margin-top: 1.5rem;
    line-height: 1.5rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;