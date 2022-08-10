// Context
import { useData, useDataUpdate } from "@context/DataContext";

// Atoms
import Container from "@atoms/Container";
import { ContainerTypeEnum } from "@atoms/Container.types";

// Types
import { HeaderItemProps, HeaderItemTypeEnum } from "./HeaderItem.types";
import { Button } from "@mantine/core";

export default function HeaderItem({ type }: HeaderItemProps) {
  const data = useData();
  const setData = useDataUpdate();

  const substractMonth = () => {
    if (data.currentMonth && data.currentMonth > 1) {
      setData({ currentMonth: data.currentMonth - 1 });
    }
  };

  const addMonth = () => {
    if (data.currentMonth && data.currentMonth < 12) {
      setData({ currentMonth: data.currentMonth + 1 });
    }
  };

  const handleMonthType = (id: number) => {
    const monthFound =
      data.months && data.months.find((month) => month.id === id);
    if (monthFound) {
      return (
        <Container key={monthFound.id} type={ContainerTypeEnum.CENTER}>
          {monthFound.label}
        </Container>
      );
    } else return null;
  };

  const handleCurrencyType = () => {
    return <Container type={ContainerTypeEnum.TOP}>{data.total} €</Container>;
  };

  const handleTypeProp = (type: HeaderItemTypeEnum) => {
    switch (type) {
      case HeaderItemTypeEnum.CURRENCY:
        return handleCurrencyType();
      case HeaderItemTypeEnum.MONTH:
        return data.currentMonth ? handleMonthType(data.currentMonth) : null;
      case HeaderItemTypeEnum.BUTTONS:
        return (
          <Container type={ContainerTypeEnum.TOP}>
            <Button onClick={substractMonth}>-</Button>
            <Button onClick={addMonth}>+</Button>
          </Container>
        );
      default:
        return null;
    }
  };

  return handleTypeProp(type);
}
