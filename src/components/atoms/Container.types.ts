export interface ContainerProps {
  children: React.ReactNode;
  type: ContainerTypeEnum;
  noPadding?: boolean;
}

export enum ContainerTypeEnum {
  TOP = "top",
  CENTER = "center",
  BOTTOM = "bottom",
}