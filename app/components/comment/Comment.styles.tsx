'use client';
import styled from "styled-components";

interface Comment {
    editting?: boolean;
}

export const CommentContainer = styled.div`
    display: flex;
    margin: 1.5rem 0;
    position: relative;
`
export const PersonContainer = styled.div`
    background: var(--color-bg);
    font-size: 2rem;
    border-radius: 50%;
    padding: 1rem;
`;

export const ContentContainer = styled.div<Comment>`
    display: flex;
    flex-direction: column;
    
    h6 {
        font-size: 1.125rem;
        font-weight: lighter;
        margin-right: auto;
    }

    p {
        margin-bottom: 1.5rem;
        opacity: 0.7;
        margin-right: auto;
        display: ${({ editting }) => editting ? 'none' : ''};
    }

    input {
        display: ${({ editting }) => !editting ? 'none' : ''};
        border: none;
        background: var(--color-bg);
        padding: 0.5rem 0.2rem;
        border-radius: 0.5rem;
        width: 20rem;
    }
`;

export const EditContainer = styled.div<Comment>`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    font-size: 1.25rem;

    button {
        display: ${({ editting }) => !editting ? 'none' : ''};
        padding: 0.5rem 1rem;
        font-family: var(--font-main);
        font-size: 1rem;
        background-color: var(--color-main);
        color: var(--color-white);
        border: none;
        border-radius: 1rem;
        transition: 0.1s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }
`;