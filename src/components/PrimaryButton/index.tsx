import * as S from './styles.ts'
import { IPrimaryButtonProps } from "./interface.ts"

export const PrimaryButton = ({children, onClick} : IPrimaryButtonProps) => {
    return(
        <S.Container onClick={onClick}>
            {children}
        </S.Container>
    )
}