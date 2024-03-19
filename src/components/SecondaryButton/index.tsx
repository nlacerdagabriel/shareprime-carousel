import { ISecondaryButtonProps } from "./interface";
import * as S from './styles'

export const SecondaryButton = ({
  children,
  onClick,
}: ISecondaryButtonProps) => {
  return <S.Container onClick={onClick}>{children}</S.Container>;
};
