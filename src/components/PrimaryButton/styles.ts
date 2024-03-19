import styled from 'styled-components';
import { theme } from '../../theme';
import { darken } from 'polished';

export const Container = styled.button`
    all: unset;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: 0.9rem;

    height: 32px;
    padding: 0 1rem;
    cursor: pointer;
    transition: 150ms;

    &:hover{
        background-color: ${props => darken(0.1, theme.colors.primary)}; 
    }

    border-radius: ${theme.borderRadius.base};

    svg{
        scale: 1.3;
    }
`;
