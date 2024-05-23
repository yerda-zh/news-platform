import styled, {css} from "styled-components";

interface TagContainerProps {
  tag: 'Ақпарат' | 'Әдебиет' | 'Өнер' | 'Ғылым' | 'Эксклюзив' | 'Карьера' | 'Спорт' | 'Тарих';
}

export const TagContainer = styled.p<TagContainerProps>`
  font-size: 0.75rem;
  color: var(--color-white);
  padding: 0.5rem 0.7rem;
  width: fit-content;
  border-radius: 2rem;

  ${({ tag }) => {
      switch (tag) {
        case "Ақпарат":
          return css`
            background-color: var(--color-tag1);
          `;
        case "Әдебиет":
          return css`
            background-color: var(--color-tag2);
          `;
        case "Өнер":
          return css`
            background-color: var(--color-tag3);
          `;
        case "Ғылым":
          return css`
            background-color: var(--color-tag4);
          `;
        case "Эксклюзив":
          return css`
            background-color: var(--color-tag5);
          `;
        case "Карьера":
          return css`
            background-color: var(--color-tag6);
          `;
        case "Спорт":
          return css`
            background-color: var(--color-tag7);
          `;
        case "Тарих":
          return css`
            background-color: var(--color-tag8);
          `;
      }
    }}
`;