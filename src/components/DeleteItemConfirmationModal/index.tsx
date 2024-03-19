import { DefaultButton, Dialog, DialogFooter, DialogType } from "@fluentui/react"
import { useBoolean } from '@fluentui/react-hooks';
import { PrimaryButton } from "../PrimaryButton";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { api, destroy } from "../../api";
import { ICarouselItem } from "../CarouselItem/interface";

export const DeleteItemConfirmationModal = () => {

    const {hideDeleteDialog, toggleHideDeleteDialog, itemToEdit, items, setItems, toggleHideSuccessDialog, setConfirmationDialogContent} = useContext(AppContext)

    const dialogContentProps = {
        type: DialogType.normal,
        title: 'Excluir imagem?',
        subText: 'Esta ação não poderá ser desfeita',
      };

      const handleDeleteItem = async() => {
        await destroy(itemToEdit.id)
        toggleHideDeleteDialog()

        let updatedItems = items.filter((item: ICarouselItem) => {
          return item.id != itemToEdit.id;
        });
        setConfirmationDialogContent({ type: DialogType.normal,
          title: 'Sucesso!',
          subText: 'Item excluído'})
        setItems(updatedItems);
        toggleHideSuccessDialog()

      }

    return(
        <Dialog
        hidden={hideDeleteDialog}
        onDismiss={toggleHideDeleteDialog}
        dialogContentProps={dialogContentProps}
      >
        <DialogFooter>
          <DefaultButton onClick={toggleHideDeleteDialog}>Cancelar</DefaultButton>
          <PrimaryButton onClick={handleDeleteItem} >Excluir</PrimaryButton>
        </DialogFooter>
      </Dialog>
    )
}