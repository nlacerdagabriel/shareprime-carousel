import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.main`
    max-width: ${theme.breakpoints.lg};
    margin: 0 auto;
    padding: 0 2rem;
    padding-bottom: 4rem;
`

export const Header = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;

    h1{
        color: ${theme.colors.title};
        font-size: 20px;
    }

`