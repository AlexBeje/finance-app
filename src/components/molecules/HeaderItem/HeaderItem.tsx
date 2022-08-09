// Context
import { useData } from "@context/DataContext";

// Atoms
import Container from "@atoms/Container";
import { ContainerTypeEnum } from "@atoms/Container.types";

// Types
import { HeaderItemProps, HeaderItemTypeEnum } from "./HeaderItem.types";

export default function HeaderItem({ type }: HeaderItemProps) {
  const data = useData();
  console.log("🥰", data);
  console.log("👭", type);

  const handleTypeProp = (type: HeaderItemTypeEnum) => {
    switch (type) {
      case HeaderItemTypeEnum.CURRENCY:
        return handleCurrencyType();
      case HeaderItemTypeEnum.MONTH:
        return <Container type={ContainerTypeEnum.TOP}>month</Container>;
      case HeaderItemTypeEnum.BUTTONS:
        return <Container type={ContainerTypeEnum.TOP}>buttons</Container>;
    }
  };

  const handleCurrencyType = () => {
    return <Container type={ContainerTypeEnum.TOP}>{data.total} €</Container>;
  };

  return handleTypeProp(type);
}
