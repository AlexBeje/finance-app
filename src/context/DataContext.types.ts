export interface DataType {
  total?: number;
  monthlyIncome?: number;
  items?: ItemType[];
  currentMonth?: number;
  months?: MonthType[];
}

export interface ItemType {
  id: number;
  label: string;
  month: string;
  checked: boolean;
}

export interface MonthType {
  id: number;
  label: string;
}