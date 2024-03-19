import { Dialog, DialogFooter } from "@fluentui/react";
import { PrimaryButton } from "../PrimaryButton";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { MdOutlineDone } from "react-icons/md";

export const SuccessModal = () => {
  const {
    hideSuccessDialog,
    toggleHideSuccessDialog,
    confirmationDialogContent,
  } = useContext(AppContext);

  return (
    <Dialog
      hidden={hideSuccessDialog}
      onDismiss={toggleHideSuccessDialog}
      dialogContentProps={confirmationDialogContent}
    >
      <MdOutlineDone color="#50C878" size={40} style={{position: 'absolute', right: '0px', top: '-50px'}} />

      <DialogFooter>
        <PrimaryButton onClick={toggleHideSuccessDialog}>Fechar</PrimaryButton>
      </DialogFooter>
    </Dialog>
  );
};
