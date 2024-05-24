import styled from "styled-components";

export const CommentsContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4{
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 1.5rem;
        margin-right: auto;
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