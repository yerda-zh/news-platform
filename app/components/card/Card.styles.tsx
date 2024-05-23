import styled, { css } from "styled-components";

interface CardContainerProps {
  type: "full" | "partial" | "plain";
  bg: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  border-radius: 1.5rem;
  background: var(--color-white);
  font-family: var(--font-main);
  padding: 1.2rem;
  background-image: ${({ type, bg }) => type === "full" ? `url(${bg})` : ''};
  background-size: cover;
  break-inside: avoid;
  margin-bottom: 1rem;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    aspect-ratio: 5/3;
    border-radius: 1rem;
    object-fit: cover;
    margin-bottom: 1rem;
    ${({ type }) =>
      (type === "plain" || type === "full") &&
      css`
        display: none;
      `}
  }

  div {
    color: ${({ type }) => type === "full" ? "var(--color-white)" : "var(--color-full)"};
    ${({ type }) =>
      type === "full" &&
      css`
        margin-top: 7rem;
      `}
  }

  h3 {
    ${({ type }) => {
      switch (type) {
        case "plain":
          return css`
            margin: 1.5rem 0 5rem 0;
            font-size: 2em;
          `;
        case "partial":
          return css`
            margin: 1rem 0 2rem 0;
            font-size: 1.25em;
          `;
        case "full":
          return css`
            margin: 1rem 0 2rem 0;
            font-size: 2em;
          `;
      }
    }}
  }
`;


export const CardTag = styled.p`
  font-size: 0.75rem;
  background: var(--color-blue);
  color: var(--color-white);
  padding: 0.5rem 0.7rem;
  width: fit-content;
  border-radius: 2rem;
`;