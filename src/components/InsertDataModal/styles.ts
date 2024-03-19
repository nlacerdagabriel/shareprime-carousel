import styled from "styled-components";


export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;


export const HeaderAction = styled.button`
  all: unset;

  cursor: pointer;
  font-size: 12px;

  display: flex;
  align-items: center;
  gap: 0.2rem;
`;


export const Body = styled.form`
    margin-top: 3rem;

    h1{
        margin-bottom: 1rem;
    }

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const LabelError = styled.span`
  color: #FF6347;
`