import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.a`
    display: flex;
    min-height: 500px;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: ${theme.borderRadius.base};

    div:nth-child(1){
        width: 45%;
        padding: 0 4rem ;
        display: flex;
        flex-direction: column;
        justify-content: center;

        background-color: ${theme.colors.white};

        h1{
            color: ${theme.colors.title};
            margin-bottom: 2rem;
            line-height: 1.35rem;
            font-size: 26px;
        }

        p{
            color: ${theme.colors.paragraph};
            font-size: 14px;
            line-height: 1.86rem;
        }
    }

    div:nth-child(2){
        width: 55%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`

