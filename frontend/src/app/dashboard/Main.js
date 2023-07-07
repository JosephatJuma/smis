import {
  SimpleGrid,
  Text,
  Card,
  Stack,
  useMantineTheme,
  px,
  Flex,
} from "@mantine/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { StatsRingCard } from "./Section";
import {
  IconMessage2,
  IconInfoSquareFilled,
  IconCalendar,
} from "@tabler/icons-react";
import DashProfile from "./DashProfile";

const getChild = (height, name, icon) => {
  return (
    <Card
      height={height}
      radius="md"
      animate={false}
      shadow="sm"
      padding="lg"
      withBorder
      sx={{
        ":hover": { background: "#f5f5f5", cursor: "pointer", color: "blue" },
      }}
    >
      <Flex>
        {icon}
        <Text>{name}</Text>
      </Flex>
    </Card>
  );
};
const BASE_HEIGHT = 360;
const getSubHeight = (children, spacing) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function Main() {
  const theme = useMantineTheme();
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[{ maxWidth: "lg", cols: 1 }]}
      spacing={"md"}
    >
      <DashProfile
        style={{
          width: "10px",
          height: "100%",
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
        }}
      />
      <PerfectScrollbar component="div">
        <div>
          <Stack>
            {getChild(
              getSubHeight(2, px(theme.spacing.md)),
              " Schedule Travel Plan",
              <IconCalendar size={80} />
            )}
            {getChild(
              getSubHeight(2, px(theme.spacing.md)),
              "Make Inquiries",
              <IconInfoSquareFilled size={80} />
            )}
            {getChild(
              getSubHeight(3, px(theme.spacing.md)),
              "Chat",
              <IconMessage2 size={80} />
            )}
          </Stack>
        </div>
      </PerfectScrollbar>
      <Card padding="lg" sx={{ justifyContent: "space-around" }}>
        <StatsRingCard />
      </Card>
    </SimpleGrid>
  );
}
