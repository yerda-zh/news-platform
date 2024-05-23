'use client'
import styled from "styled-components";

export const NavContainer = styled.nav`
    background-color: var(--color-white);
    padding: 1rem 2rem 0.3rem 2rem;
`
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
        font-family: var(--font-secondary);
    }
    h2 {
        font-family: var(--font-header);
        font-weight: normal;
    }
`;

export const SearchbarContainer = styled.div`
    background: var(--color-bg);
    margin: 0rem 2.1rem 1rem 2.1rem;
    display: flex;
    align-items: center;
    border-radius: 1rem;

    a {
        font-family: var(--font-main);
        margin: 0.5rem 1rem;

        transition: 0.1s ease-in-out;
        cursor: pointer;

        &:hover {
            color: var(--color-red);
        }
    }

    div{
        background: var(--color-white);
        width: 1.7rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: 0.3rem;
    }
`;