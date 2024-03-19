import { useContext, useEffect } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { Actions } from "../../components/Actions/index.tsx";
import { SecondaryButton } from "../../components/SecondaryButton/index.tsx";
import { theme } from "../../theme/index.tsx";
import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
} from "@fluentui/react";
import { IInfoListProps } from "./interface.ts";
import { AppContext } from "../../contexts/AppContext.tsx";
import { ICarouselItem } from "../CarouselItem/interface.ts";

export const InfoList = ({ items }: IInfoListProps) => {
  const { openPanelEdit, setItemToEdit, toggleHideDeleteDialog } =
    useContext(AppContext);

    useEffect(() => {
      console.log(items.length)
    }, [])

  const editItem = (id: number) => {
    openPanelEdit();

    const itemEdit = items.find((item: ICarouselItem) => item.id === id);
    setItemToEdit(itemEdit);
  };

  const handleDeleteItem = (id: number) => {
    const itemEdit = items.find((item: ICarouselItem) => item.id === id);
    setItemToEdit(itemEdit);
    toggleHideDeleteDialog();
  };

  const columns = [
    {
      key: "column1",
      name: "ID",
      fieldName: "id",
      minWidth: 50,
      maxWidth: 70,
      isResizable: true,
    },
    {
      key: "column2",
      name: "Título",
      fieldName: "title",
      minWidth: 50,
      maxWidth: 170,
      isResizable: true,
    },
    {
      key: "column3",
      name: "Descrição",
      fieldName: "description",
      minWidth: 50,
      maxWidth: 170,
      isResizable: true,
    },
    {
      key: "column4",
      name: "URL arquivo",
      fieldName: "url_archive",
      minWidth: 50,
      maxWidth: 170,
      isResizable: true,
    },
    {
      key: "column5",
      name: "URL direcionamento",
      fieldName: "url_target",
      minWidth: 50,
      maxWidth: 170,
      isResizable: true,
    },
    {
      key: "column6",
      name: "",
      fieldName: "actions",
      minWidth: 50,
      maxWidth: 100,
      isResizable: true,
      onRender: (item: { id: number }) => (
        <Actions>
          <SecondaryButton onClick={() => handleDeleteItem(item.id)}>
            {<IoMdTrash color={theme.colors.primary} size={20} />}
          </SecondaryButton>
          <SecondaryButton onClick={() => editItem(item.id)}>
            {<IoMdCreate color={theme.colors.primary} size={20} />}
          </SecondaryButton>
        </Actions>
      ),
    },
  ];

  const selection = new Selection();



  return (
    <DetailsList
      items={items}
      columns={columns}
      selection={selection}
      selectionMode={SelectionMode.single}
      layoutMode={DetailsListLayoutMode.justified}
      isHeaderVisible={true}
    />
  );
};
