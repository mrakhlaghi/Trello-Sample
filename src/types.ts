
export type ReactSelectOption = {
    value: string | number| null,
    label: string
}

 export type RecentMenuItemType = {
    title: string;
    template?: boolean;
    desc?: string;
    imgUrl: string;
  };

  export type Id = string | number;
 export interface Item {
    id: Id;
    content: string;
  }
  
 export interface Column {
    id: number | string;
    title: string;
    // items: Item[];
  }

  export interface SortableItemProps {
    id: string;
    children: React.ReactNode;
  }
  export type CardType ={
    id:Id,
    columnId:Id
    title: string
    content: string
  }



  
 export interface DroppableColumnProps {
    title: string;
    columnId: string;
    children: React.ReactNode;
  }
