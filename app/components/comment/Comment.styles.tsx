import styled from "styled-components";

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

export const ContentContainer = styled.div`
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
    }
`;

export const EditContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
`;