import styled from "styled-components";

interface ButtonProps {
  buttonType: "light" | "dark";
  liked?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 20rem;
  padding: 1rem;
  margin: 1rem 0.5rem;
  background-color: ${({ buttonType }) =>
    buttonType === "light" ? "var(--color-bg)" : "var(--color-main)"};
  border: none;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ buttonType }) =>
    buttonType === "light" ? "var(--color-main)" : "var(--color-white)"};
  transition: 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ liked }) => (liked ? "var(--color-red)" : "")};
  color: ${({ liked }) => (liked ? "var(--color-white)" : "")};
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
  }
`;
