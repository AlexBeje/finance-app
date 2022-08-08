import { Box } from "@mantine/core";

export default function Badge({ children }: any) {
  return (
    <Box
      sx={(theme) => ({
        background: theme.colors.dark[6],
        width: "20%",
        padding: "0 .5rem",
        borderRadius: "0 0 4px 4px",
        textAlign: "center",
      })}
    >
      {children}
    </Box>
  );
}
