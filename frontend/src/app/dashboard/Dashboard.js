import HeaderMegaMenu from "../components/Nav";
import React from "react";
import { SimpleGrid, Grid, Card } from "@mantine/core";
import { StatsRingCard } from "./Section";
import LeadGrid from "./Container";
import { Main } from "./Main";
import DashProfile from "./DashProfile";
function Dashboard() {
  return (
    <>
      <HeaderMegaMenu />
      <div
        style={{
          width: "98%",
          justifyContent: "center",
          alignSelf: "center",
          margin: "auto",
        }}
      >
        {/* <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "lg", cols: 1 }]}
        >
          <Grid gutter="md">
            <Grid.Col span={12}>
              <DashProfile />
            </Grid.Col>
            <Grid.Col span={12}>
              <Card></Card>
            </Grid.Col>
          </Grid>

          <Grid gutter="md">
            <Grid.Col>
              <StatsRingCard />
            </Grid.Col>
            <Grid.Col span={6}>
              <StatsRingCard />
            </Grid.Col>
            <Grid.Col span={6}>
              <StatsRingCard />
            </Grid.Col>
          </Grid>
        </SimpleGrid> */}
        <Main />
      </div>
    </>
  );
}

export default Dashboard;
