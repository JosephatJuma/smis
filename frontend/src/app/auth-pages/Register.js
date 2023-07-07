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
  Stack,
  MultiSelect,
  Group,
  Checkbox,
  Anchor,
  Divider,
  Container,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { IconBrandGoogle, IconBrandTwitter } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
function Register() {
  const [dateJoined, setDate] = useState();
  let [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      name: (val) => (val.length <= 6 ? "Name is invalid" : null),
    },
  });
  const next = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };
  const previous = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };
  return (
    <Container size={500} my={40}>
      <h2>Student Registration</h2>
      <Paper radius="md" withBorder shadow="lg" p={30} mt={30}>
        <Group grow mb="md" mt="md">
          <Button leftIcon={<IconBrandGoogle />} radius="xl">
            Google
          </Button>
          <Button leftIcon={<IconBrandTwitter />} radius="xl">
            Twitter
          </Button>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />
        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <Group position="apart">
              <TextInput
                label="First Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
              />
              <TextInput
                label="Last Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
              />
            </Group>

            <TextInput
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />

            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Button type="submit" radius="xl" disabled={active === 0}>
              Previous
            </Button>
            <Button type="submit" radius="xl">
              Next
            </Button>
          </Group>
        </form>
        {/* <Grid>
        <Grid.Col>
          <h2>Creat Student Account</h2>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step>
              <Text>Student Details</Text>
              <Paper
                withBorder
                shadow="md"
                p={30}
                radius="md"
                mt="xl"
                sx={{ width: "100%" }}
              >
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
      </Grid> */}
        <Anchor component={Link} to="/login" color="dimmed" size="xs">
          Already have an account? Login
        </Anchor>
      </Paper>
    </Container>
  );
}

export default Register;
