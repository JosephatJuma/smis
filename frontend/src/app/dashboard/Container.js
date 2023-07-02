import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = rem(400);

export default function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <div
      style={{
        width: "98%",
        justifyContent: "center",
        alignSelf: "center",
        marginLeft: 10,
      }}
    >
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "lg", cols: 1 }]}
      >
        <Grid gutter="md">
          <Grid.Col span={6}>
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="sm" animate={true} />
          </Grid.Col>

          <Grid.Col span={6}>
            <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} />
          </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={true}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={true}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={true}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </div>
  );
}
