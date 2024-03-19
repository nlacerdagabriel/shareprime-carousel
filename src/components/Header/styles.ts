import styled from "styled-components";
import { theme } from "../../theme";

interface IContainerProps {
    location: string;
}

export const Container = styled.header<IContainerProps>`
   display: flex;
   justify-content: center;
   padding: 2rem;
   background-color: ${theme.colors.white};
   margin-bottom: 6rem;
   position: relative;

   & > img{
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
   }

    nav{
        display: flex;
        align-items: center;
        gap: 3rem;

        a{
            color: ${theme.colors.paragraph};
            text-transform: uppercase;
            font-weight: bold;
            position: relative;

            &:nth-child(1)::before{
                background-color: ${(props) => (props.location == '/' ? theme.colors.primary : 'transparent')} ;
            }
            &:nth-child(2)::before{
                background-color: ${(props) => (props.location == '/register' ? theme.colors.primary : 'transparent')} ;
            }


            &::before{
                content: "";
                height: 3px;
                width: 95%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: -0.5rem;
                border-radius: ${theme.borderRadius.base};
            }

        }
    }
`