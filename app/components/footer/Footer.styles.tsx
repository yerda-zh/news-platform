import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--color-main);
    color: var(--color-white);
    font-family: var(--font-main);

    div{
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        border: 1px rgba(255,255,255, 0.6) solid;

        a {
            margin: 0 1rem;
            transition: 0.1s ease-in-out;
            cursor: pointer;

            &:hover {
                color: var(--color-red);
            }
        }

        p {
            opacity: 0.6;
        }
    }
`;