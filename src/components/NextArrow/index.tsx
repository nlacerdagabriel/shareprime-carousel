import NextArrowImage from "../../assets/images/next.png";
import { INextArrowProps } from "./interface";
import * as S from './styles'

export const NextArrow = ({ className, onClick, style }: INextArrowProps) => {
  return (
    <S.Container
      className={className}
      style={{ ...style }}
      onClick={onClick}
      src={NextArrowImage}
      alt="Next"
    />
  );
};

