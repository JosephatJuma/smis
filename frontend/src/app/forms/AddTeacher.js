import React, { useState } from "react";
import {
  Center,
  Grid,
  Paper,
  Text,
  TextInput,
  PasswordInput,
  Stepper,
  Button,
  Flex,
  MultiSelect,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
function AddTeacher() {
  const [dateJoined, setDate] = useState();
  let [active, setActive] = useState(0);
  const next = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };
  const previous = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };
  return (
    <Center>
      <Grid>
        <Grid.Col>
          <h2>Register new Teacher</h2>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step>
              <Text>Teacher Details</Text>
              <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <Grid>
                  <TextInput label="Full name" sx={{ margin: 5 }} />
                  <TextInput label="Email Address" sx={{ margin: 5 }} />
                </Grid>
                <DateInput
                  value={dateJoined}
                  onChange={setDate}
                  label="Date Joined"
                  placeholder="Date input"
                  maw={400}
                  mx="auto"
                  sx={{ margin: 5 }}
                />
              </Paper>
            </Stepper.Step>
            <Stepper.Step>
              <Text>Teacher Subjects</Text>
              <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <Grid>
                  <MultiSelect
                    data={[
                      "React",
                      "Angular",
                      "Svelte",
                      "Vue",
                      "Riot",
                      "Next.js",
                      "Blitz.js",
                    ]}
                    label="Select Subjects taught by this teacher"
                    placeholder="Pick all applicable"
                  />
                </Grid>
              </Paper>
            </Stepper.Step>
            <Stepper.Step>
              <Text>Teacher Credentials</Text>
              <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                <PasswordInput label="Password" sx={{ margin: 5 }} />
                <PasswordInput label="repeat password" sx={{ margin: 5 }} />
              </Paper>
            </Stepper.Step>
            <Stepper.Completed>Teacher name Added</Stepper.Completed>
          </Stepper>
          <Center>
            <Button
              variant="default"
              w={"50%"}
              sx={{ margin: 5 }}
              onClick={previous}
              disabled={active === 0}
            >
              Previous
            </Button>
            <Button w={"50%"} sx={{ margin: 5 }} onClick={next}>
              Next
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Center>
  );
}

export default AddTeacher;
