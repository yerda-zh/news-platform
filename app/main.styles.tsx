'use client';
import styled from 'styled-components';

export const MasonryContainer = styled.div`
  padding: 1rem 2.5rem;
`;

export const MasonryLayout = styled.div`
    column-gap: 1rem;
    column-count: 3;
`;

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 1rem;
`;
export const LoadingContainer = styled.div`
  width: 100dvw;
  height: 90dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
