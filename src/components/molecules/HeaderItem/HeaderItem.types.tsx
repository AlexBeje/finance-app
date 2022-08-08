export interface HeaderItemProps {
  type: HeaderItemTypeEnum;
}

export enum HeaderItemTypeEnum {
  CURRENCY = "currency",
  MONTH = "month",
  BUTTONS = "buttons",
}
