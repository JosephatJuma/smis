import { useState } from "react";
import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
  Stepper,
  PinInput,
  PasswordInput,
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(26),
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
}));

export default function ForgotPassword() {
  const { classes } = useStyles();
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container size={460} my={30}>
      <Title className={classes.title} align="center">
        Forgot your password?
      </Title>

      <Box withBorder shadow="md" p={30} radius="md" mt="xl">
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="1" description="Enter Email">
            Enter your email to get a reset link
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
              <TextInput
                label="Your email"
                placeholder="me@mantine.dev"
                required
              />
            </Paper>
          </Stepper.Step>
          <Stepper.Step label="2" description="Enter Code">
            Step 2 content: Enter Verification Code
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
              <Group position="center">
                <PinInput length={6} />
              </Group>
            </Paper>
          </Stepper.Step>
          <Stepper.Step label="3" description="Set New Password">
            set new passwors
            <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
              <PasswordInput label="New password" required />
              <PasswordInput label="Repeat password" required />
            </Paper>
          </Stepper.Step>

          <Stepper.Completed>
            Congrants, Password updated successfully
          </Stepper.Completed>
        </Stepper>
      </Box>
      <Group position="center" mt="xl">
        <Anchor color="dimmed" size="sm" className={classes.control}>
          <Center inline>
            <IconArrowLeft size={rem(12)} stroke={1.5} />
            <Box ml={5} component={Link} to={"/login"}>
              Back to the login page
            </Box>
          </Center>
        </Anchor>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep} className={classes.control}>
          Next step
        </Button>
      </Group>
    </Container>
  );
}
