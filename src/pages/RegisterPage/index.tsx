import { useContext } from "react";
import { InfoList } from "../../components/InfoList/index.tsx";
import { InsertDataModal } from "../../components/InsertDataModal/index.tsx";
import { PrimaryButton } from "../../components/PrimaryButton/index.tsx";
import { AppContext } from "../../contexts/AppContext.tsx";
import * as S from "./styles.ts";
import { IoMdAdd } from "react-icons/io";
import { EditDataModal } from "../../components/EditDataModal/index.tsx";
import { DeleteItemConfirmationModal } from "../../components/DeleteItemConfirmationModal/index.tsx";
import { SuccessModal } from "../../components/SuccessModal/index.tsx";

export const RegisterPage = () => {
  const {openPanelNew, items, reset} = useContext(AppContext)

  const handleClick = () => {
    reset()
    openPanelNew()
  }

return (
    <>
    <DeleteItemConfirmationModal/>
    <SuccessModal/>
    <InsertDataModal/>
    <EditDataModal/>
      <S.Container>
        <S.Header>
          <h1>Cadastro de imagens</h1>
          <PrimaryButton onClick={handleClick}>
            <IoMdAdd />
            Nova imagem
          </PrimaryButton>
        </S.Header>

        <InfoList items={items}/>
      </S.Container>
    </>
  );
};
