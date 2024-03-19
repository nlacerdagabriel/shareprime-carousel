import PrevArrowImage from "../../assets/images/previous.png";
import { IPrevArrowProps } from "./interface";
import * as S from './styles'

export const PrevArrow = ({ className, style, onClick }: IPrevArrowProps) => {
  return (
    <S.Container
      className={className}
      style={{ ...style }}
      onClick={onClick}
      src={PrevArrowImage}
      alt="Next"
    />
  );
};

