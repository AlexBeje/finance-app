export interface DataType {
  total: number;
  monthlyIncome: number;
  items: ItemType[];
}

export interface ItemType {
  id: number;
  editableItemData: EditableItemDataType;
}

export interface EditableItemDataType {
  label: string;
  month: string;
  checked: boolean;
}
