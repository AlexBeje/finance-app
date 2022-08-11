// Mantine
import { Box } from "@mantine/core";

// Molecules
import HeaderItem from "@molecules/HeaderItem/HeaderItem";
import { HeaderItemTypeEnum } from "@molecules/HeaderItem/HeaderItem.types";

export default function Header() {
  return (
    <>
      <Box className="flex gap-4 mx-4">
        <HeaderItem type={HeaderItemTypeEnum.CURRENCY} />
        <HeaderItem type={HeaderItemTypeEnum.MONTH} />
        <HeaderItem type={HeaderItemTypeEnum.BUTTONS} />
      </Box>
    </>
  );
}
