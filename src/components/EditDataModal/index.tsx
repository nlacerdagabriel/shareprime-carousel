import { MouseEventHandler, useContext } from "react";
import { FaRegSave } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { GoLink } from "react-icons/go";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { AppContext } from "../../contexts/AppContext";
import { PrimaryButton } from "../PrimaryButton";
import * as S from "../InsertDataModal/styles";
import { DialogType, Label, TextField } from "@fluentui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICarouselItem } from "../CarouselItem/interface";
import { update } from "../../api";

interface IHeaderActionProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const HeaderAction = ({ children, onClick }: IHeaderActionProps) => {
  return <S.HeaderAction onClick={onClick}>{children}</S.HeaderAction>;
};

export const EditDataModal = () => {
  const {
    dismissPanelEdit,
    isPanelOpenEdit,
    getAllItems,
    itemToEdit,
    setItemToEdit,
    toggleHideSuccessDialog,
    setConfirmationDialogContent,
  } = useContext(AppContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICarouselItem>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<ICarouselItem> = async (data) => {
    await update(data, itemToEdit.id);
    getAllItems();
    dismissPanelEdit();
    setConfirmationDialogContent({
      type: DialogType.normal,
      title: "Sucesso!",
      subText: "Imagem alterada",
    });
    toggleHideSuccessDialog();

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleDismissPanel = () => {
    window.location.reload();
    setItemToEdit({
      id: 0,
      description: "",
      order: 0,
      title: "",
      url_archive: "",
      url_target: "",
    });
    dismissPanelEdit();
  };

  const onRenderFooterContent = (): JSX.Element => {
    return (
      <S.Footer>
        <DefaultButton onClick={handleDismissPanel}>Cancelar</DefaultButton>
        <PrimaryButton onClick={handleSubmit(onSubmit)}>
          Salvar imagem
        </PrimaryButton>
      </S.Footer>
    );
  };

  return (
    <Panel
      type={PanelType.medium}
      isOpen={isPanelOpenEdit}
      isLightDismiss={true}
      onDismiss={handleDismissPanel}
      closeButtonAriaLabel="Close"
      onRenderFooterContent={onRenderFooterContent}
      isFooterAtBottom={true}
    >
      <S.Header>
        <HeaderAction onClick={() => {}}>
          <FaRegSave size={12} />
          Salvar
        </HeaderAction>
        <HeaderAction onClick={() => {}}>
          <IoIosClose size={20}/>
          Cancelar
        </HeaderAction>
        <HeaderAction onClick={() => {}}>
          <GoLink  size={12} />
          Copiar link
        </HeaderAction>
      </S.Header>

      <S.Body>
        <h1>Editar imagem</h1>

        <div>
          <Label required>Título</Label>
          <TextField
            defaultValue={itemToEdit.title}
            {...register("title", { required: true })}
          />

          {errors.title && <S.LabelError>Título é obrigatório</S.LabelError>}
        </div>

        <div>
          <Label required>Descrição</Label>
          <TextField
            defaultValue={itemToEdit.description}
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
            defaultValue={itemToEdit.url_archive}
            {...register("url_archive", { required: true })}
          />
          {errors.url_archive && (
            <S.LabelError>URL do arquivo é obrigatória</S.LabelError>
          )}
        </div>

        <div>
          <Label required>URL direcionamento</Label>
          <TextField
            required
            defaultValue={itemToEdit.url_target}
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
            defaultValue={itemToEdit.order}
            {...register("order", { required: true })}
          />
          {errors.order && <S.LabelError>Ordem é obrigatória</S.LabelError>}
        </div>
      </S.Body>
    </Panel>
  );
};
