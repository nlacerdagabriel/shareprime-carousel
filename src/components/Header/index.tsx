import { Link } from "react-router-dom";
import * as S from "./styles";
import { IHeaderProps } from "./interface";
import Logo from '../../assets/images/log.png'

export const Header = ({location}: IHeaderProps) => {
  return (
    <S.Container location={location}>
        <img src={Logo} height={40}/>

      <nav>
        <Link  to="/">Slider</Link>
        <Link  to="/register">Cadastro</Link>
      </nav>
    </S.Container>
  );
};
