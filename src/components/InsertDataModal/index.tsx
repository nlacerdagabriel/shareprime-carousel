import { useContext } from "react";
import { FaRegSave } from "react-icons/fa";

import { DefaultButton } from "@fluentui/react/lib/Button";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { AppContext } from "../../contexts/AppContext";
import { PrimaryButton } from "../PrimaryButton";
import * as S from "./styles";
import { DialogType, Label, TextField } from "@fluentui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICarouselItem } from "../CarouselItem/interface";
import { store } from "../../api";

const HeaderAction = () => {
  return (
    <S.HeaderAction>
      <FaRegSave size={12} />
      Save
    </S.HeaderAction>
  );
};

export const InsertDataModal = () => {
  const { dismissPanelNew, isPanelOpenNew, getAllItems, handleSubmit, reset, setValue, errors, register, toggleHideSuccessDialog, setConfirmationDialogContent} = useContext(AppContext);


  const onSubmit: SubmitHandler<ICarouselItem> = async (data) => {
    await store(data);
    getAllItems()
    dismissPanelNew()
    setConfirmationDialogContent({ type: DialogType.normal,
      title: 'Sucesso!',
      subText: 'Imagem cadastrada'})
    toggleHideSuccessDialog()
    reset();
  };

  const handleDismissPanel = () => {
    dismissPanelNew();
    reset(); 
  };

  const onRenderFooterContent = (): JSX.Element => {
    return (
      <S.Footer>
        <DefaultButton onClick={handleDismissPanel}>Cancelar</DefaultButton>
        <PrimaryButton onClick={handleSubmit(onSubmit)}>
          Cadastrar imagem
        </PrimaryButton>
      </S.Footer>
    );
  };

  return (
    <Panel
      type={PanelType.medium}
      isOpen={isPanelOpenNew}
      isLightDismiss={true}
      onDismiss={handleDismissPanel}
      closeButtonAriaLabel="Close"
      onRenderFooterContent={onRenderFooterContent}
      isFooterAtBottom={true}
    >
      <S.Header>
        <HeaderAction />
        <HeaderAction />
        <HeaderAction />
      </S.Header> 

      <S.Body>
        <h1>Nova imagem</h1>

        <div>
          <Label required>Título</Label>
       <TextField
            onChange={(e: any) => setValue("title", e.target.value)}
            {...register("title", { required: true })}
          />

          {errors.title && <S.LabelError>Título é obrigatório</S.LabelError>}
        </div>

        <div>
          <Label required>Descrição</Label>
          <TextField
            onChange={(e: any) => setValue("description", e.target.value)}
            {...register("description", { required: true })}

            multiline
            rows={5}
            resizable={false}
          />
          {errors.description && (
            <S.LabelError>Descrição é obrigatória</S.LabelError>
          )}
        </div>

        <div>
          <Label required>URL arquivo</Label>
          <TextField
            onChange={(e: any) => setValue("url_archive", e.target.value)}
            {...register("url_archive", { required: true })}

          />
          {errors.url_archive && (
            <S.LabelError>URL do arquivo é obrigatória</S.LabelError>
          )}
        </div>

        <div>
          <Label required>URL direcionamento</Label>
          <TextField
            onChange={(e: any) => setValue("url_target", e.target.value)}
            {...register("url_target", { required: true })}

          />
          {errors.url_target && (
            <S.LabelError>URL de redirecionamento é obrigatória</S.LabelError>
          )}
        </div>

        <div>
          <Label required>Ordem</Label>
          <TextField
          type="number"
            onChange={(e: any) => setValue("order", e.target.value)}
            {...register("order", { required: true })}

          />
          {errors.order && <S.LabelError>Ordem é obrigatória</S.LabelError>}
        </div>
      </S.Body>
    </Panel>
  );
};
