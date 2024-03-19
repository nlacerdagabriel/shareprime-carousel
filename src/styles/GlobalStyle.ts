import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI',  sans-serif;
    }
    html{
        scroll-behavior: smooth;
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        -webkit-font-smoothing: antialiased;
        background-color: #f5f5f5;
    }

    body::-webkit-scrollbar {
        display: none;
    }
    
    body, input, textarea, button{
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    a{
        text-decoration: none;
    }

    .slick-dots {
        display: flex;
        justify-content: center;
        
        margin: 0;
        position: relative;
        bottom: -2rem;
        
        list-style-type: none;
        
            li {
                margin: 0 0.25rem;
            }
        
            button {
                display: block;
                width: 2px !important;
                height: 2px !important;
                padding: 0;
                
                border: none;
                border-radius: 100%;
                background-color: ${theme.colors.paragraph} !important;
                
                text-indent: -9999px;
            }
        
            li.slick-active button {
                background-color: ${theme.colors.primary} !important;
            }

	
}

.ms-DetailsRow-fields{

    & div{
    color: #a2a2a2 ;

    &:nth-child(2){
        color: black !important;
    }
}
}

`;
