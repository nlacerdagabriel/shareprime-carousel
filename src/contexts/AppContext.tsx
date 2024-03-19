import React, { createContext, useEffect, useState } from "react";
import { useBoolean } from "@fluentui/react-hooks";
import { destroy, index } from "../api";
import { ICarouselItem } from "../components/CarouselItem/interface";
import { useForm } from "react-hook-form";
import { DialogType } from "@fluentui/react";

interface IProps {
  children: React.ReactNode;
}

interface IAppContextProps {
  dismissPanelNew: () => void;
  isPanelOpenNew: boolean;
  dismissPanelEdit: () => void;
  isPanelOpenEdit: boolean;
  openPanelNew: () => void;
  openPanelEdit: () => void;
  items: ICarouselItem[];
  getAllItems: () => void;
  setItems: React.Dispatch<React.SetStateAction<ICarouselItem[]>>;
  editItem: (id: number) => void;
  handleSubmit: any;
  reset: any;
  setValue: any;
  getValues: any;
  errors: any;
  register: any;
  itemToEdit: ICarouselItem;
  setItemToEdit: (item: ICarouselItem) => void;
  hideDeleteDialog: boolean;
  toggleHideDeleteDialog: () => void;
  hideSuccessDialog: boolean;
  toggleHideSuccessDialog: () => void;
  confirmationDialogContent: {};
  setConfirmationDialogContent: (dialogContent: { 
    type: DialogType; 
    title: string; 
    subText: string; 
}) => void;

}

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

interface IAppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<IProps> = ({
  children,
}: IAppProviderProps) => {
  const [items, setItems] = useState<any[]>([]);
  const [isPanelOpenNew, { setTrue: openPanelNew, setFalse: dismissPanelNew }] =
    useBoolean(false);
    const [hideDeleteDialog, { toggle: toggleHideDeleteDialog }] = useBoolean(true);
    const [hideSuccessDialog, { toggle: toggleHideSuccessDialog }] = useBoolean(true);
    const [confirmationDialogContent, setConfirmationDialogContent] = useState({
      type: DialogType.normal,
      title: 'Sucesso!',
      subText: 'Imagem cadastrada',
    })

  const [
    isPanelOpenEdit,
    { setTrue: openPanelEdit, setFalse: dismissPanelEdit },
  ] = useBoolean(false);
  const [itemToEdit, setItemToEdit] = useState<ICarouselItem>({
    id: 0,
    description: "",
    order: 0,
    title: "",
    url_archive: "",
    url_target: "",
  });

  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useForm<ICarouselItem>({
    defaultValues: {},
  });

  const getAllItems = async () => {
    const { data } = await index();
    const sortedItems = data.sort(
      (a: ICarouselItem, b: ICarouselItem) => a.order - b.order
    );
    setItems(sortedItems);
  };


  const editItem = async (id: number) => {
    openPanelEdit();

    const itemEdit = items.find((item: ICarouselItem) => item.id === id);
    setItemToEdit(itemEdit);

    toggleHideSuccessDialog()
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <AppContext.Provider
      value={{
        dismissPanelNew,
        openPanelNew,
        isPanelOpenNew,
        dismissPanelEdit,
        openPanelEdit,
        isPanelOpenEdit,
        items,
        getAllItems,
        setItems,
        handleSubmit,
        reset,
        setValue,
        getValues,
        errors,
        editItem,
        itemToEdit,
        setItemToEdit,
        register,
        hideDeleteDialog,
        toggleHideDeleteDialog,
        toggleHideSuccessDialog,
        hideSuccessDialog,
        confirmationDialogContent,
        setConfirmationDialogContent

      }}
    >
      {children}
    </AppContext.Provider>
  );
};
