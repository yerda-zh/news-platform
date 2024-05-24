'use client';
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { BiSolidPencil } from "react-icons/bi";

interface Comment {
    editting?: boolean;
}

export const CommentContainer = styled.div`
    display: flex;
    position: relative;
    gap: 1rem;
`
export const PersonContainer = styled.div`
    background: var(--color-bg);
    font-size: 2.2rem;
    height: fit-content;
    align-self: center;
    border-radius: 1rem;
    padding: 0.8rem;
`;

export const ContentContainer = styled.div<Comment>`
    display: flex;
    flex-direction: column;
    
    h6 {
        font-size: 1.125rem;
        font-weight: lighter;
    }

    p {
        margin: 1.5rem 0;
        opacity: 0.7;
        display: ${({ editting }) => editting ? 'none' : ''};
    }

    input {
        margin: 1.5rem 0;
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
    gap: 1rem;
    font-size: 1.5rem;

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
        cursor: pointer;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const DeleteButton = styled(FaTrash)`
    color: var(--color-red);
    cursor: pointer;
    transition: 0.1s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

export const EditButton = styled(BiSolidPencil)<Comment>`
    color: var(--color-main);
    font-size: 1.7rem;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    display: ${({ editting}) => editting ? 'none' : ''};

    &:hover {
        transform: scale(1.1);
    }
`