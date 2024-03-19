import { IActionProps } from './interface'
import * as S from './styles'

export const Actions = ({children} : IActionProps) => {
    return(
        <S.Container>   
            {children}
        </S.Container>
    )
}