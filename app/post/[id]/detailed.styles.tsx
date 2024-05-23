import styled from "styled-components";

interface ButtonProps {
    buttonType: "light" | "dark";
    liked?: boolean;
  }

export const DetailedContainer = styled.main`
    background-color: var(--color-white);
    font-family: var(--font-main);
    padding: 0 20rem;
    display: flex;
    flex-direction: column;

    h1 {
        padding: 2rem 0 1rem 0;
        font-size: 2.25rem;
    }

    div {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    img {
        aspect-ratio: 5/3;
        width: 100%;
        align-self: center;
        border-radius: 1.5rem;
        margin: 1.5rem 0 2rem 0;
    }

    .body-text {
        font-size: 1.125rem;
        margin: 2rem 0;
    }

    h4{
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 1.5rem;
    }

    .divider {
        background: rgba(0, 0, 0, 0.5);
        height: 1px;
        width: 100%;
    }

    textarea {
        height: 7rem;
        border-radius: 1.5rem;
        margin: 0.5rem 0;
        padding: 2rem;
        border: none;
        background: var(--color-bg);
        font-family: var(--font-main);
        font-size: 1.125rem;
        color: var(--color-main);

        &::placeholder {
            opacity: 0.5;
        }
    }
`;

export const ButtonsContainer = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button<ButtonProps>`
    width: 20rem;
    padding: 1rem;
    margin: 1rem 0.5rem;
    background-color: ${({buttonType}) => buttonType === 'light' ? 'var(--color-bg)' : 'var(--color-main)'};
    border: none;
    border-radius: 2rem;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${({buttonType}) => buttonType === 'light' ? 'var(--color-main)' : 'var(--color-white)'};
    transition: 0.1s ease-in-out;
    display: flex;
    justify-content: center;
    gap: 0.7rem;
    background-color: ${({liked}) => liked ? 'var(--color-red)' : ''};
    color: ${({liked}) => liked ? 'var(--color-white)' : ''};

    &:hover {
        transform: scale(0.95);
    }
`;