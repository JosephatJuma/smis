import { useState, useEffect } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Dialog,
  LoadingOverlay,
} from "@mantine/core";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { IconX } from "@tabler/icons-react";
import { Navigate } from "react-router-dom";

export default function AuthenticationTitle() {
  const [credentials, setCredentials] = useState({});
  const { message, isSending, loggedIn, clearErr, submitData } = useLogin();

  const api_url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    nprogress.complete();
  });
  const submit = () => {
    submitData(`${api_url}/v1/login/`, credentials);
  };
  return (
    <>
      {loggedIn && <Navigate to={"/"} />}
      <NavigationProgress autoReset={true} />
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component={Link} to="/sign-up">
            Create account
          </Anchor>
        </Text>

        <LoadingOverlay visible={isSending} overlayBlur={2} />

        <Paper withBorder shadow="lg" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            onInput={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            onInput={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component={Link} to={"/reset-password"} size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" onClick={submit}>
            Sign in
          </Button>
        </Paper>

        <Dialog
          opened={message}
          onClose={clearErr}
          withCloseButton
          size="lg"
          radius="md"
          position={{ top: 20, left: 20 }}
          shadow="xl"
          bg={"dark"}
          display={"flex"}
        >
          <IconX size="1.1rem" color="white" />
          <Text color="white">{message}</Text>
        </Dialog>
      </Container>
    </>
  );
}
