export interface ContainerProps {
  children: React.ReactNode;
  type: ContainerTypeEnum;
}

export enum ContainerTypeEnum {
  TOP = "top",
  CENTER = "center",
  BOTTOM = "bottom",
}