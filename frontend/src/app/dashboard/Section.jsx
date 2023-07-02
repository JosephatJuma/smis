import {
  createStyles,
  Text,
  Card,
  RingProgress,
  Group,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },

  lead: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: rem(22),
    lineHeight: 1,
  },

  inner: {
    display: "flex",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  ring: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",

    [theme.fn.smallerThan("xs")]: {
      justifyContent: "center",
      marginTop: theme.spacing.md,
    },
  },
}));

const StatsRingCardProps = {
  title: "Name",
  completed: 20,
  total: 100,
  stats: {
    value: 20,
    label: "Lable",
  },
};

export function StatsRingCard() {
  const { classes, theme } = useStyles();
  //   const items = StatsRingCardProps.stats.map((stat) => (
  //     <div key={StatsRingCardPropsstat.label}>
  //       <Text className={classes.label}>{StatsRingCardProps.stat.value}</Text>
  //       <Text size="xs" color="dimmed">
  //         {stat.label}
  //       </Text>
  //     </div>
  //   ));

  return (
    <Card
      withBorder
      p="xl"
      radius="md"
      className={classes.card}
      shadow="lg"
      sx={{
        backgroundImage: theme.fn.linearGradient(
          0,
          theme.colors.orange[4],
          theme.colors.pink[2]
        ),
      }}
    >
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            {StatsRingCardProps.title}
          </Text>
          <div>
            <Text className={classes.lead} mt={30}>
              {StatsRingCardProps.completed}
            </Text>
            <Text fz="xs" color="dimmed">
              Completed
            </Text>
          </div>
          {/* <Group mt="lg">{items}</Group> */}
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[
              {
                value:
                  (StatsRingCardProps.completed / StatsRingCardProps.total) *
                  100,
                color: theme.primaryColor,
              },
            ]}
            label={
              <div>
                <Text ta="center" fz="lg" className={classes.label}>
                  {(
                    (StatsRingCardProps.completed / StatsRingCardProps.total) *
                    100
                  ).toFixed(0)}
                  %
                </Text>
                <Text ta="center" fz="xs" c="dimmed">
                  Completed
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}
