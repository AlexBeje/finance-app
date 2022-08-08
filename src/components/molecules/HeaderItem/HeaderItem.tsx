// Context
import { useData } from "@context/DataContext";

// Atoms
import Badge from "@atoms/Badge";

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
        return <p>month</p>;
      case HeaderItemTypeEnum.BUTTONS:
        return <p>buttons</p>;
    }
  };

  const handleCurrencyType = () => {
    return <Badge>{data.total} €</Badge>;
  };

  return handleTypeProp(type);
}
