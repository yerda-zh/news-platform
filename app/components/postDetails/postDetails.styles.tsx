'use client';
import styled from "styled-components";

import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";

export const PostDetailsContainer = styled.main`
    h1 {
        padding: 2rem 0 1rem 0;
        font-size: 2.25rem;
    }

    .info {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    img {
        aspect-ratio: 5/3;
        width: 100%;
        border-radius: 1.5rem;
        margin: 1.5rem 0 2rem 0;
    }

    .body-text {
        font-size: 1.125rem;
        margin: 2rem 0;
    }
`;

export const ButtonsContainer = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
`;

export const FacebookIcon = styled(FaFacebook)`
    transition: 0.1s ease-in-out;
    &:hover{
        color: var(--color-red);
    }
`;
export const TwitterIcon = styled(FaTwitter)`
    transition: 0.1s ease-in-out;
    &:hover{
        color: var(--color-red);
    }
`;
export const VkIcon = styled(FaVk)`
    transition: 0.1s ease-in-out;
    &:hover{
        color: var(--color-red);
    }
`;
