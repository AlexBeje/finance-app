// Types
import { ContainerProps, ContainerTypeEnum } from "./Container.types";

// Mantine
import { Box } from "@mantine/core";

export default function Container({ children, type }: ContainerProps) {
  return (
    <Box
      sx={(theme) => ({
        background: theme.colors.dark[6],
        padding: "0 .5rem",
        width: "100%",
        borderRadius:
          (type === ContainerTypeEnum.TOP && "0 0 4px 4px") ||
          (type === ContainerTypeEnum.CENTER && "4px") ||
          (type === ContainerTypeEnum.BOTTOM && "4px 4px 0 0") ||
          "0",
        textAlign: "center",
      })}
    >
      {children}
    </Box>
  );
}
