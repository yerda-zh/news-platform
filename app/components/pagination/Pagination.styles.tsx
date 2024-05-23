import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  button {
    padding: 1rem;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    font-family: var(--font-main);
    font-weight: 500;
    transition: 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: var(--color-main);
      color: var(--color-white);
    }
  }
  .active {
    background-color: var(--color-main);
    color: var(--color-white);
  }
`;
